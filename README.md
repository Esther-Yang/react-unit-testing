# Testing for React

A repo to record how to write tests for React App.

# Tools

## Jest

- tool for running tests and asserting results.
- not React specific.
- already installed with `create-react-app`.
- [documentation](https://jestjs.io/).

## React Testing Library

- tool for rendering.
- already installed with `create-react-app`.
- [documentation](https://testing-library.com/docs/react-testing-library/intro/).

# Notes

### File extenstion

Convention to name the file same as the component.

```
<Name>.test.js
```

### Lauch the test runner

In terminal

```
npm test
```

### Test Suites and Tests

```
describe('Some Component',()=>{
    test('renders something', ()=>{
        //1. Arrange

        //2. Act

        //3. Assert
    })
})
```

#### 1. Arrange

- Mock function

```
window.fetch = jest.fn();
window.fetch.mockResolvedValueOnce({
    json: async () => [{ id: "p1", title: "First post" }],
});
```

- Render

```
render(<ComponentName />);
```

### 2. Act

- User Event

```
const buttonElement = screen.getByRole("button");
userEvent.click(buttonElement);
```

### 3. Assert

- Expect

```
const outputElement = screen.getByText("Changed!", { exact: false });
expect(outputElement).toBeInTheDocument();
```

### ⭐Differences between `get`, `query`, `find` method

Differences: whether if it will throw error/ return something

- `get`: will throw an error
- `query`: will not throw an error
- `find`: return a promise
