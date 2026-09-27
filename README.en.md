# dsh-alt-enter-newline

English | [简体中文](./README.md)

Adds **Alt+Enter as a newline** to the [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (dsh) web composer.

dsh's default keys are: Enter sends, Shift+Enter breaks the line, Ctrl+Enter cuts into a running conversation, and Alt+Enter is unbound. With this plugin, Alt+Enter also breaks the line, matching the habit of other AI clients.

The plugin simply replays Alt+Enter as Shift+Enter and lets the composer handle it — dsh itself is not modified, and uninstalling leaves nothing behind.

## Install

Install from the market or the Plugin Manager in the dsh Web GUI, or from the command line (replace `web` with your profile name; same below):

```
dsh plugin --profile web add dsh-alt-enter-newline
```

You can also just ask your dsh agent to install it. Refresh the page afterwards; the shortcut reference (Ctrl+/, or the View button on the Settings shortcuts row) gains an "Alt+Enter new line" row.

## Compatibility

- Enter during IME composition and AltGr keyboard layouts are unaffected;
- other shortcuts such as Ctrl+Alt+Enter (pane fullscreen) keep working;
- tested against dsh 0.1.7-rc.2. The plugin relies on some dsh internals; if it stops working after a dsh upgrade, please report it in [Issues](https://github.com/liggest/dsh-alt-enter-newline/issues).

## Uninstall

```
dsh plugin --profile web remove dsh-alt-enter-newline
```

Or uninstall it from the Plugin Manager.

## License

[MIT](./LICENSE)
