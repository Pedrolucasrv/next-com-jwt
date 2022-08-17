function AuthPageStatic(props){
    return(
        <div>

        <h1>
            static
        </h1>
                    <pre>
          {JSON.stringify(props,null,2)}
        </pre>
        </div>
    );
}