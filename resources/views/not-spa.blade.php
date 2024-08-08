<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            color: blue;
        }
    </style>
</head>
<body>
    <div id="example"></div>
    <script src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
        const { useState } = React;

        const ExampleComponent = () => {
            const [flg, setFlg] = useState(true);  

            return (
                <div>
                    <h1>{flg ? 'React' : 'Blade'}</h1>
                    <button onClick={() => setFlg(!flg)}>Click</button>
                </div>
            );
        };

        ReactDOM.render(<ExampleComponent />, document.getElementById('example'));
    </script>
</body>
</html>