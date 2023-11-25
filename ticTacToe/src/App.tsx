import { View, Text,StyleSheet } from 'react-native'
import Snackbar from 'react-native-snackbar'
import Icons from './components/Icons'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { StatusBar } from 'react-native'
import { FlatList } from 'react-native'
import { Pressable } from 'react-native'
import Sound from 'react-native-sound'


const App = (): JSX.Element => {

  const [isCross, setIsCross] = useState<boolean>(false)
  const [gameWinner, setGameWinner] = useState<string>('')
  const [gameState, setGameState] = useState(new Array(9).fill('empty', 0, 9))

  const reloadGame = () => {
    setIsCross(false)
    setGameWinner('')
    setGameState(new Array(9).fill('empty', 0, 9))
    playSound()
  }

  const playSound = () =>{
    var sound = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());
    
      // Play the sound with an onEnd callback
      sound.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  }

  const checkIsWinner = () => {
    //  checking  winner of the game
    if (
      gameState[0] === gameState[1] &&
      gameState[0] === gameState[2] &&
      gameState[0] !== 'empty'
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[3] !== 'empty' &&
      gameState[3] === gameState[4] &&
      gameState[4] === gameState[5]
    ) {
      setGameWinner(`${gameState[3]} won the game! 🥳`);
    } else if (
      gameState[6] !== 'empty' &&
      gameState[6] === gameState[7] &&
      gameState[7] === gameState[8]
    ) {
      setGameWinner(`${gameState[6]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[3] &&
      gameState[3] === gameState[6]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[1] !== 'empty' &&
      gameState[1] === gameState[4] &&
      gameState[4] === gameState[7]
    ) {
      setGameWinner(`${gameState[1]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[5] &&
      gameState[5] === gameState[8]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (
      gameState[0] !== 'empty' &&
      gameState[0] === gameState[4] &&
      gameState[4] === gameState[8]
    ) {
      setGameWinner(`${gameState[0]} won the game! 🥳`);
    } else if (
      gameState[2] !== 'empty' &&
      gameState[2] === gameState[4] &&
      gameState[4] === gameState[6]
    ) {
      setGameWinner(`${gameState[2]} won the game! 🥳`);
    } else if (!gameState.includes('empty', 0)) {
      setGameWinner('Draw game... ⌛️');
    }
  }

  const onChangeItem = (itemNumber : number) => {
      if(gameWinner){
        return Snackbar.show({
          text: gameWinner,
          backgroundColor: '#000000',
          textColor: "#FFFFFF"
        })
      }

      if (gameState[itemNumber] === 'empty') {
          gameState[itemNumber] = isCross ? 'cross': 'circle'
          setIsCross(!isCross)
      } else {
        return Snackbar.show({
          text: "Position is already filled",
          backgroundColor: "red",
          textColor: "#FFF"
        })
      }
      checkIsWinner()
  }

  return (
    <SafeAreaView>
      <View style={styles.mainContainerAll}>
      <StatusBar backgroundColor={"#000000"}/>
      {gameWinner ? (
          <View style={[styles.playerInfo,styles.winnerInfo]}>
            <Text style={styles.winnerTxt}>{gameWinner}</Text>
          </View>
      ) : (
          <View style={[styles.playerInfo,isCross?styles.playerX:styles.playerO]}>
            <Text style={[styles.gameTurnTxt]}>
              Player {isCross? "X" : "O"}'s turn
            </Text>
          </View>
      )}

     {/* game placements grids */}
    <FlatList
      numColumns={3}
      data={gameState}
      style={styles.grid}
      renderItem={({item,index}) => (
        <Pressable
          key={index}
          style={styles.card}
          onPress={() => onChangeItem(index)}
        >
          <Icons name={item}></Icons>
        </Pressable>
      )}
    />

    {/* game action */}
    <Pressable
      style={styles.gameBtn}
      onPress={reloadGame}
      >
        <Text style={styles.gameBtnText}>
          {gameWinner ? 'Start new game' : 'Reload the gameee'}
        </Text>
      </Pressable>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  mainContainerAll:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"#14213d",
    width:"100%",
    height:"100%"
  },

  playerInfo: {
    height: 50,
    width:"80%",
    marginTop:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 15,
    paddingVertical: 8,
    marginVertical: 12,
    marginHorizontal: 14,

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
  },
  gameTurnTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  playerX: {
    backgroundColor: '#38CC77',
  },
  playerO: {
    backgroundColor: '#F7CD2E',
  },
  grid: {
    marginTop:130,
    margin: 20,
  },
  card: {
    height: 110,
    width: '33.33%',
    backgroundColor:"#ffe5ec",
    alignItems: 'center',
    borderRadius:2,
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#fca311',
  },
  winnerInfo: {
    borderRadius: 8,
    backgroundColor: '#38CC77',

    shadowOpacity: 0.1,
  },
  winnerTxt: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  gameBtn: {
    alignItems: 'center',
    marginBottom:100,
    width:'auto',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 36,
    backgroundColor: '#ffffff',
  },
  gameBtnText: {
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
  },
});

export default App