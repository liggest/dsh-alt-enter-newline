/**
 * Client half: Alt+Enter inserts a newline in the conversation composer.
 *
 * The composer keymap leaves Alt+Enter un-preventDefault'd at the Lexical
 * layer, so the keystroke reaches the shortcuts adapter as fixed input. This
 * plugin claims it there, scoped to [data-composer-input], and replays it as
 * a synthetic Shift+Enter so the editor's own newline path (undo history
 * included) does the insertion. IME composition and AltGraph arrive with
 * gesture.composing set and are skipped.
 */
window.__ModuleLoader__.load({
  id: 'dsh-alt-enter-newline',
  factory() {
    return {
      inject: ['shortcuts', 'locale'],
      apply(ctx) {
        const label = () => ctx.locale.getLocale().active.startsWith('zh')
          ? 'Alt+Enter 换行'
          : 'Alt+Enter new line'
        ctx.effect(() => ctx.shortcuts.registerFixed({
          id: 'composer.alt-newline',
          label,
          keys: ctx.shortcuts.describeBinding({ code: 'Enter', modifiers: ['alt'] }).keys,
          bindings: [{ code: 'Enter', modifiers: ['alt'] }],
          group: 'input',
        }), 'dsh-alt-enter-newline: fixed catalog row')
        ctx.effect(() => ctx.shortcuts.observeFixedInput((input) => {
          if (input.type !== 'keydown') return
          const { gesture, context } = input
          if (gesture.code !== 'Enter' || !gesture.alt
            || gesture.control || gesture.meta || gesture.shift
            || gesture.composing || gesture.defaultPrevented) return
          if (context.modal !== null || context.target === null) return
          const root = context.target.closest('[data-composer-input]')
          if (root === null || !root.isContentEditable) return
          input.consume()
          root.dispatchEvent(new KeyboardEvent('keydown', {
            key: 'Enter', code: 'Enter', shiftKey: true, bubbles: true, cancelable: true,
          }))
        }), 'dsh-alt-enter-newline: composer input')
      },
    }
  },
})
