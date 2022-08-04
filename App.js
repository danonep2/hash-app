import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';
import Box from './comp/Box'
import WinScreen from './comp/WinScreen'

function App() {
  const [playerDaVez, setPlayer] = useState(1)
  const [boxState, setBoxState] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [winScreen,setWinScreen] = useState(false)
  const [winPlayer,setWinPlayer] = useState("Deu velha!!!")
  const [X, setX] = useState(0)

  function resetGame() {
    setBoxState([0, 0, 0, 0, 0, 0, 0, 0, 0])
    setX(0)
    setPlayer(1)
  }

  function hash(BN) {
    if (boxState[BN] == 0 && X == 0) {
      boxState[BN] = playerDaVez
      setBoxState(boxState)
      playerWinTest()
    }
  }

  function playerWinTest() {
    let F = 0
    //H
    if (boxState[0] == playerDaVez && boxState[1] == playerDaVez && boxState[2] == playerDaVez) { F = 1 }
    if (boxState[3] == playerDaVez && boxState[4] == playerDaVez && boxState[5] == playerDaVez) { F = 1 }
    if (boxState[6] == playerDaVez && boxState[7] == playerDaVez && boxState[8] == playerDaVez) { F = 1 }

    //V
    if (boxState[0] == playerDaVez && boxState[3] == playerDaVez && boxState[6] == playerDaVez) { F = 1 }
    if (boxState[1] == playerDaVez && boxState[4] == playerDaVez && boxState[7] == playerDaVez) { F = 1 }
    if (boxState[2] == playerDaVez && boxState[5] == playerDaVez && boxState[8] == playerDaVez) { F = 1 }

    //D
    if (boxState[0] == playerDaVez && boxState[4] == playerDaVez && boxState[8] == playerDaVez) { F = 1 }
    if (boxState[2] == playerDaVez && boxState[4] == playerDaVez && boxState[6] == playerDaVez) { F = 1 }

    //V
    let vTeste = 0
    let v
    for (v = 0; v < 9; v++) {
      if (boxState[v] == 0 && vTeste == 0) {
        vTeste++
      }
    }


    if (vTeste == 0 && F == 0) {
      setWinPlayer("Deu Velha!!!")
      setWinScreen(true)
      setX(1)
      return
    }
    else if (F == 1) {
      setWinPlayer("O jogador " + playerDaVez + " ganhou!!!")
      setWinScreen(true)
      setX(1)
      return
    }
    setPlayer(playerDaVez == 1 ? 2 : 1)
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>HASH</Text>
      <StatusBar style="auto" backgroundColor={"#808"} />
      <View style={styles.gamebox}>

        <View style={styles.gamerow}>
          <Box hashF={hash} boxN={0} boxColor={boxState[0]} />
          <Box hashF={hash} boxN={1} boxColor={boxState[1]} />
          <Box hashF={hash} boxN={2} boxColor={boxState[2]} />
        </View>

        <View style={styles.gamerow}>
          <Box hashF={hash} boxN={3} boxColor={boxState[3]} />
          <Box hashF={hash} boxN={4} boxColor={boxState[4]} />
          <Box hashF={hash} boxN={5} boxColor={boxState[5]} />
        </View>

        <View style={styles.gamerow}>
          <Box hashF={hash} boxN={6} boxColor={boxState[6]} />
          <Box hashF={hash} boxN={7} boxColor={boxState[7]} />
          <Box hashF={hash} boxN={8} boxColor={boxState[8]} />
        </View>

      </View>
      <Button
        title='Reiniciar jogo'
        onPress={() => resetGame()}
      />

      <WinScreen WinVisible={winScreen} Close={setWinScreen} TextWin={winPlayer}/>

    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#0008",
    fontSize: 50,
    marginBottom: 15,
  },
  gamebox: {
    backgroundColor: "#0003",
    padding: 15,
    borderRadius: 15,
    marginBottom: 20
  },
  gamerow: {
    flexDirection: 'row',
  },
});

export default App