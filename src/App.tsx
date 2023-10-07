import MainBlock from "./components/Blocks/MainBlock"
import Center from "./components/Center/Center"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Overlay from "./components/Overlay/Overlay"
import Wrapper from "./components/Wrapper/Wrapper"

function App() {
  return (
    <>
      <Center>
        <Wrapper>
          <Header />
          <Main>
            <MainBlock />
          </Main>
          <Overlay />
        </Wrapper>
      </Center>
    </>
  )
}

export default App