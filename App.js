import {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {Entypo} from '@expo/vector-icons';
export default function App() {


  const [darkMode, setDarkMode] = useState(false)
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.','^', '=']

  const [currentNumber, setCurrentNumber] = useState("")
  const [lastNumber, setlastNumber] = useState("")
  
  function calculator(){
    const splitNumbers = currentNumber.split(" ")
    const firstNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch(operator){
      case '+':
        setCurrentNumber((firstNumber + lastNumber).toString())
        return 

        case '-':
        setCurrentNumber((firstNumber - lastNumber).toString())
        return 

        case '*':
        setCurrentNumber((firstNumber * lastNumber).toString())
        return 

        case '/':
        setCurrentNumber((firstNumber / lastNumber).toString())
        return 
        
        case '^':
          setCurrentNumber((firstNumber ** lastNumber).toString())
        return

        case '%':
          setCurrentNumber((firstNumber * lastNumber / 100).toString())
    }
  }

  function handleInput(buttonPressed){
    if(buttonPressed === '+' | buttonPressed === "-" | buttonPressed === "*" | buttonPressed === "/" | buttonPressed === "^" | buttonPressed === "%"){
      setCurrentNumber(currentNumber + " " + buttonPressed + " ")
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
        return
      case 'AC':
        setlastNumber("")
        setCurrentNumber("")
        return
      case '=' :
       setlastNumber(currentNumber + " = " )
       calculator()
       return  
    }

    setCurrentNumber(currentNumber + buttonPressed)
  }


  const styles = StyleSheet.create({
    
    results:{
     backgroundColor: darkMode ? "#282f3b" : "#f5f5f5",
      width: '100%',
      minHeight: 280,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },

    resultsText:{
      color: darkMode ? "#f5f5f5" : "#282F38",
      margin: 10,
      fontSize: 50
    },

    historyText:{
      color: darkMode ? "#B5B7BB" : "#7c7c7c",
      fontSize: 20,
      marginRight: 10,
      alignSelf:'flex-end'
    },

    themeButton: {
      alignSelf:'flex-start',
      bottom: 50,
      margin: 15,
      backgroundColor: darkMode ? "#7b8084" : "#e5e5e5",
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    buttons:{
      flexDirection: 'row',
      flexWrap:'wrap',
    },
    
    button:{
      borderColor: darkMode ? '#3f4d5b' : '#e5e5e5',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 85,
      minHeight: 100, 
      flex: 1,  
    },
    textButton:{
      color: darkMode ? '#b5b7bb': "#7c7c7c",
      fontSize:25
    },

  });

  
  return (

    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo name={darkMode? "light-up" : "moon"} size={24} color={darkMode ? "white":"black"} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)}/>
        </TouchableOpacity>

        <Text style={styles.historyText}> {lastNumber}</Text>
        <Text style={styles.resultsText}> {currentNumber}</Text>
    </View>

    <View style={styles.buttons}>
      {buttons.map((button) => 
        button === '=' ? 
        <TouchableOpacity onPress= {()  => handleInput(button)} key={button} style={[styles.button, 
        {backgroundColor: '#9DBC7B'}] }>
          <Text style={[styles.textButton, {color:'white',justifyContent: 'center' , fontSize: 30}] 
        }>{button}</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress= {()  => handleInput(button)} key={button} style={[styles.button, 
        {backgroundColor: typeof(button) === 'number'? darkMode ?
         '#303940' : '#fff' : darkMode === true ? '#414853' : '#ededed' }]}>
        <Text style={styles.textButton}>{button}</Text>
        </TouchableOpacity>
  )}
    </View>
    </View>
  );
}
