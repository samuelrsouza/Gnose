import '@styles/globals.css'


export default function App({ Component, pageProps }) {

const Noop = ({children}) => <> {children} </> 


const Layout = Component.Layout ?? Noop

  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  
  
  )
}


