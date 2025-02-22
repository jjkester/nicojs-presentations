import * as monaco from 'monaco-editor';

const DEFAULT_EDITOR_HEIGHT = 400;

monaco.editor.defineTheme('github-default-dark', {
  inherit: false,
  base: 'vs-dark',
  colors: {
    focusBorder: '#1f6feb',
    foreground: '#c9d1d9',
    descriptionForeground: '#8b949e',
    errorForeground: '#f85149',
    'textLink.foreground': '#58a6ff',
    'textLink.activeForeground': '#58a6ff',
    'textBlockQuote.background': '#010409',
    'textBlockQuote.border': '#30363d',
    'textCodeBlock.background': '#6e768166',
    'textPreformat.foreground': '#8b949e',
    'textSeparator.foreground': '#21262d',
    'icon.foreground': '#8b949e',
    'keybindingLabel.foreground': '#c9d1d9',
    'button.background': '#238636',
    'button.foreground': '#ffffff',
    'button.hoverBackground': '#2ea043',
    'button.secondaryBackground': '#282e33',
    'button.secondaryForeground': '#c9d1d9',
    'button.secondaryHoverBackground': '#30363d',
    'checkbox.background': '#161b22',
    'checkbox.border': '#30363d',
    'dropdown.background': '#161b22',
    'dropdown.border': '#30363d',
    'dropdown.foreground': '#c9d1d9',
    'dropdown.listBackground': '#161b22',
    'input.background': '#0d1117',
    'input.border': '#30363d',
    'input.foreground': '#c9d1d9',
    'input.placeholderForeground': '#484f58',
    'badge.foreground': '#f0f6fc',
    'badge.background': '#1f6feb',
    'progressBar.background': '#1f6feb',
    'titleBar.activeForeground': '#8b949e',
    'titleBar.activeBackground': '#0d1117',
    'titleBar.inactiveForeground': '#8b949e',
    'titleBar.inactiveBackground': '#010409',
    'titleBar.border': '#30363d',
    'activityBar.foreground': '#c9d1d9',
    'activityBar.inactiveForeground': '#8b949e',
    'activityBar.background': '#0d1117',
    'activityBarBadge.foreground': '#f0f6fc',
    'activityBarBadge.background': '#1f6feb',
    'activityBar.activeBorder': '#f78166',
    'activityBar.border': '#30363d',
    'sideBar.foreground': '#c9d1d9',
    'sideBar.background': '#010409',
    'sideBar.border': '#30363d',
    'sideBarTitle.foreground': '#c9d1d9',
    'sideBarSectionHeader.foreground': '#c9d1d9',
    'sideBarSectionHeader.background': '#010409',
    'sideBarSectionHeader.border': '#30363d',
    'list.hoverForeground': '#c9d1d9',
    'list.inactiveSelectionForeground': '#c9d1d9',
    'list.activeSelectionForeground': '#c9d1d9',
    'list.hoverBackground': '#6e76811a',
    'list.inactiveSelectionBackground': '#6e768166',
    'list.activeSelectionBackground': '#6e768166',
    'list.focusForeground': '#c9d1d9',
    'list.focusBackground': '#388bfd26',
    'list.inactiveFocusBackground': '#388bfd26',
    'list.highlightForeground': '#58a6ff',
    'tree.indentGuidesStroke': '#21262d',
    'notificationCenterHeader.foreground': '#8b949e',
    'notificationCenterHeader.background': '#161b22',
    'notifications.foreground': '#c9d1d9',
    'notifications.background': '#161b22',
    'notifications.border': '#30363d',
    'notificationsErrorIcon.foreground': '#f85149',
    'notificationsWarningIcon.foreground': '#d29922',
    'notificationsInfoIcon.foreground': '#58a6ff',
    'pickerGroup.border': '#30363d',
    'pickerGroup.foreground': '#8b949e',
    'quickInput.background': '#161b22',
    'quickInput.foreground': '#c9d1d9',
    'statusBar.foreground': '#8b949e',
    'statusBar.background': '#0d1117',
    'statusBar.border': '#30363d',
    'statusBar.focusBorder': '#1f6feb80',
    'statusBar.noFolderBackground': '#0d1117',
    'statusBar.debuggingForeground': '#f0f6fc',
    'statusBar.debuggingBackground': '#da3633',
    'statusBarItem.prominentBackground': '#6e768166',
    'statusBarItem.remoteForeground': '#c9d1d9',
    'statusBarItem.remoteBackground': '#30363d',
    'statusBarItem.hoverBackground': '#c9d1d914',
    'statusBarItem.activeBackground': '#c9d1d91f',
    'statusBarItem.focusBorder': '#1f6feb',
    'editorGroupHeader.tabsBackground': '#010409',
    'editorGroupHeader.tabsBorder': '#30363d',
    'editorGroup.border': '#30363d',
    'tab.activeForeground': '#c9d1d9',
    'tab.inactiveForeground': '#8b949e',
    'tab.inactiveBackground': '#010409',
    'tab.activeBackground': '#0d1117',
    'tab.hoverBackground': '#0d1117',
    'tab.unfocusedHoverBackground': '#6e76811a',
    'tab.border': '#30363d',
    'tab.unfocusedActiveBorderTop': '#30363d',
    'tab.activeBorder': '#0d1117',
    'tab.unfocusedActiveBorder': '#0d1117',
    'tab.activeBorderTop': '#f78166',
    'breadcrumb.foreground': '#8b949e',
    'breadcrumb.focusForeground': '#c9d1d9',
    'breadcrumb.activeSelectionForeground': '#8b949e',
    'breadcrumbPicker.background': '#161b22',
    'editor.foreground': '#c9d1d9',
    'editor.background': '#0d1117',
    'editorWidget.background': '#161b22',
    'editor.foldBackground': '#6e76811a',
    'editor.lineHighlightBackground': '#6e76811a',
    'editorLineNumber.foreground': '#6e7681',
    'editorLineNumber.activeForeground': '#c9d1d9',
    'editorIndentGuide.background': '#c9d1d91f',
    'editorIndentGuide.activeBackground': '#c9d1d93d',
    'editorWhitespace.foreground': '#484f58',
    'editorCursor.foreground': '#58a6ff',
    'editor.findMatchBackground': '#9e6a03',
    'editor.findMatchHighlightBackground': '#f2cc6080',
    'editor.linkedEditingBackground': '#58a6ff12',
    'editor.selectionHighlightBackground': '#3fb95040',
    'editor.wordHighlightBackground': '#6e768180',
    'editor.wordHighlightBorder': '#6e768199',
    'editor.wordHighlightStrongBackground': '#6e76814d',
    'editor.wordHighlightStrongBorder': '#6e768199',
    'editorBracketMatch.background': '#3fb95040',
    'editorBracketMatch.border': '#3fb95099',
    'editorInlayHint.background': '#8b949e33',
    'editorInlayHint.foreground': '#8b949e',
    'editorInlayHint.typeBackground': '#8b949e33',
    'editorInlayHint.typeForeground': '#8b949e',
    'editorInlayHint.paramBackground': '#8b949e33',
    'editorInlayHint.paramForeground': '#8b949e',
    'editorGutter.modifiedBackground': '#bb800966',
    'editorGutter.addedBackground': '#2ea04366',
    'editorGutter.deletedBackground': '#f8514966',
    'diffEditor.insertedLineBackground': '#23863633',
    'diffEditor.insertedTextBackground': '#2386364d',
    'diffEditor.removedLineBackground': '#da363333',
    'diffEditor.removedTextBackground': '#da36334d',
    'scrollbar.shadow': '#484f5833',
    'scrollbarSlider.background': '#6e768133',
    'scrollbarSlider.hoverBackground': '#6e768145',
    'scrollbarSlider.activeBackground': '#6e768187',
    'editorOverviewRuler.border': '#010409',
    'panel.background': '#010409',
    'panel.border': '#30363d',
    'panelTitle.activeBorder': '#f78166',
    'panelTitle.activeForeground': '#c9d1d9',
    'panelTitle.inactiveForeground': '#8b949e',
    'panelInput.border': '#30363d',
    'debugIcon.breakpointForeground': '#f85149',
    'debugConsole.infoForeground': '#8b949e',
    'debugConsole.warningForeground': '#d29922',
    'debugConsole.errorForeground': '#ffa198',
    'debugConsole.sourceForeground': '#e3b341',
    'debugConsoleInputIcon.foreground': '#bc8cff',
    'debugTokenExpression.name': '#79c0ff',
    'debugTokenExpression.value': '#a5d6ff',
    'debugTokenExpression.string': '#a5d6ff',
    'debugTokenExpression.boolean': '#56d364',
    'debugTokenExpression.number': '#56d364',
    'debugTokenExpression.error': '#ffa198',
    'symbolIcon.arrayForeground': '#f0883e',
    'symbolIcon.booleanForeground': '#58a6ff',
    'symbolIcon.classForeground': '#f0883e',
    'symbolIcon.colorForeground': '#79c0ff',
    'symbolIcon.constructorForeground': '#d2a8ff',
    'symbolIcon.enumeratorForeground': '#f0883e',
    'symbolIcon.enumeratorMemberForeground': '#58a6ff',
    'symbolIcon.eventForeground': '#6e7681',
    'symbolIcon.fieldForeground': '#f0883e',
    'symbolIcon.fileForeground': '#d29922',
    'symbolIcon.folderForeground': '#d29922',
    'symbolIcon.functionForeground': '#bc8cff',
    'symbolIcon.interfaceForeground': '#f0883e',
    'symbolIcon.keyForeground': '#58a6ff',
    'symbolIcon.keywordForeground': '#ff7b72',
    'symbolIcon.methodForeground': '#bc8cff',
    'symbolIcon.moduleForeground': '#ff7b72',
    'symbolIcon.namespaceForeground': '#ff7b72',
    'symbolIcon.nullForeground': '#58a6ff',
    'symbolIcon.numberForeground': '#3fb950',
    'symbolIcon.objectForeground': '#f0883e',
    'symbolIcon.operatorForeground': '#79c0ff',
    'symbolIcon.packageForeground': '#f0883e',
    'symbolIcon.propertyForeground': '#f0883e',
    'symbolIcon.referenceForeground': '#58a6ff',
    'symbolIcon.snippetForeground': '#58a6ff',
    'symbolIcon.stringForeground': '#79c0ff',
    'symbolIcon.structForeground': '#f0883e',
    'symbolIcon.textForeground': '#79c0ff',
    'symbolIcon.typeParameterForeground': '#79c0ff',
    'symbolIcon.unitForeground': '#58a6ff',
    'symbolIcon.variableForeground': '#f0883e',
    'symbolIcon.constantForeground': '#aff5b4',
    'terminal.foreground': '#c9d1d9',
    'terminal.ansiBlack': '#484f58',
    'terminal.ansiRed': '#ff7b72',
    'terminal.ansiGreen': '#3fb950',
    'terminal.ansiYellow': '#d29922',
    'terminal.ansiBlue': '#58a6ff',
    'terminal.ansiMagenta': '#bc8cff',
    'terminal.ansiCyan': '#39c5cf',
    'terminal.ansiWhite': '#b1bac4',
    'terminal.ansiBrightBlack': '#6e7681',
    'terminal.ansiBrightRed': '#ffa198',
    'terminal.ansiBrightGreen': '#56d364',
    'terminal.ansiBrightYellow': '#e3b341',
    'terminal.ansiBrightBlue': '#79c0ff',
    'terminal.ansiBrightMagenta': '#d2a8ff',
    'terminal.ansiBrightCyan': '#56d4dd',
    'terminal.ansiBrightWhite': '#f0f6fc',
    'editorBracketHighlight.foreground1': '#79c0ff',
    'editorBracketHighlight.foreground2': '#56d364',
    'editorBracketHighlight.foreground3': '#e3b341',
    'editorBracketHighlight.foreground4': '#ffa198',
    'editorBracketHighlight.foreground5': '#ff9bce',
    'editorBracketHighlight.foreground6': '#d2a8ff',
    'editorBracketHighlight.unexpectedBracket.foreground': '#8b949e',
    'gitDecoration.addedResourceForeground': '#3fb950',
    'gitDecoration.modifiedResourceForeground': '#d29922',
    'gitDecoration.deletedResourceForeground': '#f85149',
    'gitDecoration.untrackedResourceForeground': '#3fb950',
    'gitDecoration.ignoredResourceForeground': '#484f58',
    'gitDecoration.conflictingResourceForeground': '#db6d28',
    'gitDecoration.submoduleResourceForeground': '#8b949e',
    'debugToolBar.background': '#161b22',
    'editor.stackFrameHighlightBackground': '#bb800966',
    'editor.focusedStackFrameHighlightBackground': '#2ea04366',
    'peekViewEditor.matchHighlightBackground': '#bb800966',
    'peekViewResult.matchHighlightBackground': '#bb800966',
    'peekViewEditor.background': '#6e76811a',
    'peekViewResult.background': '#0d1117',
    'settings.headerForeground': '#8b949e',
    'settings.modifiedItemIndicator': '#bb800966',
    'welcomePage.buttonBackground': '#21262d',
    'welcomePage.buttonHoverBackground': '#30363d',
  },
  rules: [
    {
      foreground: '#8b949e',
      token: 'comment',
    },
    {
      foreground: '#8b949e',
      token: 'punctuation.definition.comment',
    },
    {
      foreground: '#8b949e',
      token: 'string.comment',
    },
    {
      foreground: '#79c0ff',
      token: 'constant',
    },
    {
      foreground: '#79c0ff',
      token: 'entity.name.constant',
    },
    {
      foreground: '#79c0ff',
      token: 'variable.other.constant',
    },
    {
      foreground: '#79c0ff',
      token: 'variable.other.enummember',
    },
    {
      foreground: '#79c0ff',
      token: 'variable.language',
    },
    {
      foreground: '#79c0ff',
      token: 'entity',
    },
    {
      foreground: '#ffa657',
      token: 'entity.name',
    },
    {
      foreground: '#ffa657',
      token: 'meta.export.default',
    },
    {
      foreground: '#ffa657',
      token: 'meta.definition.variable',
    },
    {
      foreground: '#c9d1d9',
      token: 'variable.parameter.function',
    },
    {
      foreground: '#c9d1d9',
      token: 'meta.jsx.children',
    },
    {
      foreground: '#c9d1d9',
      token: 'meta.block',
    },
    {
      foreground: '#c9d1d9',
      token: 'meta.tag.attributes',
    },
    {
      foreground: '#c9d1d9',
      token: 'entity.name.constant',
    },
    {
      foreground: '#c9d1d9',
      token: 'meta.object.member',
    },
    {
      foreground: '#c9d1d9',
      token: 'meta.embedded.expression',
    },
    {
      foreground: '#d2a8ff',
      token: 'entity.name.function',
    },
    {
      foreground: '#7ee787',
      token: 'entity.name.tag',
    },
    {
      foreground: '#7ee787',
      token: 'support.class.component',
    },
    {
      foreground: '#ff7b72',
      token: 'keyword',
    },
    {
      foreground: '#ff7b72',
      token: 'storage',
    },
    {
      foreground: '#ff7b72',
      token: 'storage.type',
    },
    {
      foreground: '#c9d1d9',
      token: 'storage.modifier.package',
    },
    {
      foreground: '#c9d1d9',
      token: 'storage.modifier.import',
    },
    {
      foreground: '#c9d1d9',
      token: 'storage.type.java',
    },
    {
      foreground: '#a5d6ff',
      token: 'string',
    },
    {
      foreground: '#a5d6ff',
      token: 'string punctuation.section.embedded source',
    },
    {
      foreground: '#79c0ff',
      token: 'support',
    },
    {
      foreground: '#79c0ff',
      token: 'meta.property-name',
    },
    {
      foreground: '#ffa657',
      token: 'variable',
    },
    {
      foreground: '#c9d1d9',
      token: 'variable.other',
    },
    {
      fontStyle: 'italic',
      foreground: '#ffa198',
      token: 'invalid.broken',
    },
    {
      fontStyle: 'italic',
      foreground: '#ffa198',
      token: 'invalid.deprecated',
    },
    {
      fontStyle: 'italic',
      foreground: '#ffa198',
      token: 'invalid.illegal',
    },
    {
      fontStyle: 'italic',
      foreground: '#ffa198',
      token: 'invalid.unimplemented',
    },
    {
      fontStyle: 'italic underline',
      background: '#ff7b72',
      foreground: '#f0f6fc',
      // content: '^M',
      token: 'carriage-return',
    },
    {
      foreground: '#ffa198',
      token: 'message.error',
    },
    {
      foreground: '#79c0ff',
      token: 'string variable',
    },
    {
      foreground: '#a5d6ff',
      token: 'source.regexp',
    },
    {
      foreground: '#a5d6ff',
      token: 'string.regexp',
    },
    {
      foreground: '#a5d6ff',
      token: 'string.regexp.character-class',
    },
    {
      foreground: '#a5d6ff',
      token: 'string.regexp constant.character.escape',
    },
    {
      foreground: '#a5d6ff',
      token: 'string.regexp source.ruby.embedded',
    },
    {
      foreground: '#a5d6ff',
      token: 'string.regexp string.regexp.arbitrary-repitition',
    },
    {
      fontStyle: 'bold',
      foreground: '#7ee787',
      token: 'string.regexp constant.character.escape',
    },
    {
      foreground: '#79c0ff',
      token: 'support.constant',
    },
    {
      foreground: '#79c0ff',
      token: 'support.variable',
    },
    {
      foreground: '#7ee787',
      token: 'support.type.property-name.json',
    },
    {
      foreground: '#79c0ff',
      token: 'meta.module-reference',
    },
    {
      foreground: '#ffa657',
      token: 'punctuation.definition.list.begin.markdown',
    },
    {
      fontStyle: 'bold',
      foreground: '#79c0ff',
      token: 'markup.heading',
    },
    {
      fontStyle: 'bold',
      foreground: '#79c0ff',
      token: 'markup.heading entity.name',
    },
    {
      foreground: '#7ee787',
      token: 'markup.quote',
    },
    {
      fontStyle: 'italic',
      foreground: '#c9d1d9',
      token: 'markup.italic',
    },
    {
      fontStyle: 'bold',
      foreground: '#c9d1d9',
      token: 'markup.bold',
    },
    {
      fontStyle: 'underline',
      token: 'markup.underline',
    },
    {
      fontStyle: 'strikethrough',
      token: 'markup.strikethrough',
    },
    {
      foreground: '#79c0ff',
      token: 'markup.inline.raw',
    },
    {
      background: '#490202',
      foreground: '#ffa198',
      token: 'markup.deleted',
    },
    {
      background: '#490202',
      foreground: '#ffa198',
      token: 'meta.diff.header.from-file',
    },
    {
      background: '#490202',
      foreground: '#ffa198',
      token: 'punctuation.definition.deleted',
    },
    {
      foreground: '#ff7b72',
      token: 'punctuation.section.embedded',
    },
    {
      background: '#04260f',
      foreground: '#7ee787',
      token: 'markup.inserted',
    },
    {
      background: '#04260f',
      foreground: '#7ee787',
      token: 'meta.diff.header.to-file',
    },
    {
      background: '#04260f',
      foreground: '#7ee787',
      token: 'punctuation.definition.inserted',
    },
    {
      background: '#5a1e02',
      foreground: '#ffa657',
      token: 'markup.changed',
    },
    {
      background: '#5a1e02',
      foreground: '#ffa657',
      token: 'punctuation.definition.changed',
    },
    {
      foreground: '#161b22',
      background: '#79c0ff',
      token: 'markup.ignored',
    },
    {
      foreground: '#161b22',
      background: '#79c0ff',
      token: 'markup.untracked',
    },
    {
      foreground: '#d2a8ff',
      fontStyle: 'bold',
      token: 'meta.diff.range',
    },
    {
      foreground: '#79c0ff',
      token: 'meta.diff.header',
    },
    {
      fontStyle: 'bold',
      foreground: '#79c0ff',
      token: 'meta.separator',
    },
    {
      foreground: '#79c0ff',
      token: 'meta.output',
    },
    {
      foreground: '#8b949e',
      token: 'brackethighlighter.tag',
    },
    {
      foreground: '#8b949e',
      token: 'brackethighlighter.curly',
    },
    {
      foreground: '#8b949e',
      token: 'brackethighlighter.round',
    },
    {
      foreground: '#8b949e',
      token: 'brackethighlighter.square',
    },
    {
      foreground: '#8b949e',
      token: 'brackethighlighter.angle',
    },
    {
      foreground: '#8b949e',
      token: 'brackethighlighter.quote',
    },
    {
      foreground: '#ffa198',
      token: 'brackethighlighter.unmatched',
    },
    {
      foreground: '#a5d6ff',
      fontStyle: 'underline',
      token: 'constant.other.reference.link',
    },
    {
      foreground: '#a5d6ff',
      fontStyle: 'underline',
      token: 'string.other.link',
    },
  ],
  encodedTokensColors: [],
});

let tempFileCounter = 0;

export function defineMonacoEditor(scaleFactor: number) {
  customElements.define(
    'monaco-editor',
    class MonacoEditor extends HTMLElement {
      editor: monaco.editor.IStandaloneCodeEditor | undefined;
      #container: HTMLElement | undefined;
      #resizeObserver: ResizeObserver | undefined;

      connectedCallback() {
        let code = this.innerText.trim();
        this.innerHTML = `
    <div class="editor-frame" style="text-align: left; margin: var(--r-block-margin) auto;">
      <div class="container" style="margin: auto; width: 90%; height: ${
        this.getAttribute('editor-height') ??
        DEFAULT_EDITOR_HEIGHT * scaleFactor
      }px"></div>
    </div>
    `;
        this.#container = this.querySelector<HTMLElement>('.container')!;
        this.editor = monaco.editor.create(this.#container, {
          model: monaco.editor.createModel(
            `${this.showFileName ? `// ${this.fileName}\n` : ''}${code}`,
            this.getAttribute('lang') ?? 'typescript',
            this.fileUrl
          ),
          theme: this.getAttribute('theme') ?? 'github-default-dark',
          fontSize: 18 * scaleFactor,
          scrollBeyondLastLine: false,
        });

        if (this.revealLine) {
          this.editor.revealLine(this.revealLine);
        }
        this.#resizeObserver = new ResizeObserver(() => {
          this.editor?.layout();
        });
        this.#resizeObserver.observe(this.#container);
      }

      disconnectedCallback() {
        if (this.editor) {
          this.editor.dispose();
        }
        if (this.#container) {
          this.#resizeObserver?.unobserve(this.#container);
        }
      }

      get revealLine() {
        const line = this.getAttribute('reveal-line');
        return line ? parseInt(line) : undefined;
      }

      get showFileName() {
        return this.hasAttribute('show-file-name');
      }

      #fileName: string | undefined;
      get fileName(): string {
        if (!this.#fileName) {
          this.#fileName = this.getAttribute('file-name') ?? `__tmp_file_${++tempFileCounter}.ts`;
        }
        return this.#fileName;
      }

      get fileUrl() {
        const fileName = this.fileName;
        return monaco.Uri.file(fileName);
      }

      get type() {
        return this.getAttribute('type') ?? 'module';
      }
    }
  );
}
