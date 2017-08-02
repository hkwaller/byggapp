module.exports = {
	"parser": "babel-eslint",
	"env": {
		"browser": true,
		"es6": true,
		"mocha": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"ecmaFeatures": {
			"experimentalObjectRestSpread": true,
			"jsx": true
		},
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": ["error", 4, { "SwitchCase": 1 }],
		"linebreak-style": ["error", "unix"],
		"quotes": ["error", "single"],
		"semi": ["error", "never"],
		"jsx-quotes": ["error", "prefer-double"],
		"keyword-spacing": ["error", { "before": true }],
		"no-unused-vars" : ["error", { "args": "none" }],
		"no-trailing-spaces": ["error", { "skipBlankLines": true }],
		"no-unneeded-ternary": ["error", { "defaultAssignment": false }],
		"object-curly-spacing": ["error", "always", { "objectsInObjects": false }],
		"object-curly-newline": ["error", {
	        "ObjectExpression": { "consistent": true },
	        "ObjectPattern": { "consistent": true }
	    }],
	    "object-property-newline": ["error", { "allowMultiplePropertiesPerLine": true }],
		"no-var": ["error"],
		"no-console": [0],
		"arrow-parens": ["error", "as-needed"],
		"space-before-function-paren": ["error", "never"],
		"no-tabs": ["error"],
		"computed-property-spacing": ["error", "never"],
		"comma-dangle": ["error", {
			"arrays": "always-multiline",
			"objects": "always-multiline",
			"imports": "always-multiline",
			"exports": "always-multiline",
			"functions": "ignore",
		}],
		"sort-imports": [0, {
			"ignoreCase": false,
			"ignoreMemberSort": false,
			"memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
		}],

		"strict": [2, "never"],	

		// eslint-plugin-react
		"react/prefer-stateless-function": ["error"],
		"react/no-direct-mutation-state": ["error"],
		"react/jsx-closing-tag-location": ["error"],
		"react/jsx-uses-vars": ["error"],
		"react/jsx-curly-spacing": ["error", { "when": "always", "children": "always" }],
		"react/jsx-tag-spacing" : ["error", {
			  "closingSlash": "never",
			  "beforeSelfClosing": "always",
			  "afterOpening": "never"
			}
		],
		"react/jsx-indent": [2, 4],
		"react/jsx-indent-props": [2, 4],
		"react/jsx-closing-bracket-location": [2],
		"react/jsx-max-props-per-line": [2, { "when": "multiline" }],
		"react/jsx-pascal-case": [2],
		"react/jsx-first-prop-new-line": [2],
		"react/jsx-uses-react": [2]

	}
};