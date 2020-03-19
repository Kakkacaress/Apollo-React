import ApolloClient, {InMemoryCache} from 'apollo-boost'


//Setup a new cache memory
const cache = new InMemoryCache()


//get the token
const token = sessionStorage.getItem('tribr_token') || '';

console.log('token', token);


//Setup apollo client 
const client = new ApolloClient({
    uri: 'http://localhost: 2020',
    cache,
    headers:{
        authorization: token && token
    },
    onError: ({graphQLErrors, networkError, operation}) => {
        
    }
})