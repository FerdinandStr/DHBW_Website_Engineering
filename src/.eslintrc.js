//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//INFO: Um EsLint (und Prettier) korrekt einzurichten,
//      müssen nur die entsprechenden Abhängigkeiten installiert werden => npm i
//      VSCode Plugins werden keine benötigt, außer ESLint (solange nicht local auf der Maschine vorhanden)
//      
//      Danach werden nur noch, falls erwünscht, die entsprechenen VSCode Settings zum automatischen speichern benötigt:
//      =>  strg+shift+p => nach "settings" suchen => "Preferences: Open Settings (JSON)" auswählen => folgende Config hinzufügen:
//
//      "editor.formatOnSave": true,
//      "eslint.autoFixOnSave": true,
//      "eslint.alwaysShowStatus": true,
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    settings: {
        react: {
            'version': 'detect',
        },
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
            legacyDecorators: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: ['react', 'react-hooks'/*"prettier"*/],
    rules: {
        // "prettier/prettier": ["error", {printWidth: 180, tabWidth: 4, singleQuote: true, semi: false, singleQuote: true, jsxSingleQuote: true}],
        'no-console': 0,
        'no-unused-vars': ['warn'],
        // "consistent-return": 2,
        indent: [1, 4, { ignoredNodes: ['TemplateLiteral'], SwitchCase: 1 }],
        semi: [2, 'never'],
        'space-unary-ops': 2,
        quotes: [2, 'single'],
        'jsx-quotes': [2, 'prefer-single'],
        // "linebreak-style"  : ["error", "windows"],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
        'react/prop-types': 1
    }
}
