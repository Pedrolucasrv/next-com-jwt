export default function AuthPageServer(props){
    return(
        <div>

        <h1>
            server
        </h1>
        <pre>
          {JSON.stringify(props,null,2)}
        </pre>
        </div>
    );
}