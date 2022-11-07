# Hometask: Integration Testing on FE

## Instruction on how install the project

1. Clone the repository to your local machine and open it with a program of your choice (preferably VS Code)
2. Add JEST as development dependency with the command 'yarn add --dev jest'.
3. Add the following piece of code to the 'package.json' file:

```
"scripts": {
    "test": "jest"
  }
```

4. Install Babel package ('yarn add --dev babel-jest @babel/core @babel/preset-env') and add configuraion for it. Create a new file 'babel.config.cjs' and add the following code to it:

```
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ]
};
```

5. Now you're ready to run the tests. Execute: 'yarn test'
