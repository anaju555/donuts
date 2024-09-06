import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font"; //importa a fonte

import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const [font] = useFonts({
    Rokkitt: require("../donuts/src/fontes/Rokkitt/static/Rokkitt-BoldItalic.ttf"),
  });

  if (!font) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../donuts/src/Imagem/4.png")}
      />
      <View
        style={{
          width: "100%",
          padding: 10,
          alignItems: "center",
          marginTop: 115,
          position: "absolute",
        }}
      >
        <Text style={styles.txt}>DONUTS DE MORANGO!</Text>
        <View style={styles.row}></View>
      </View>

      <Image
        style={styles.donutsmorango}
        source={require("../donuts/src/Imagem/donutsmorango.png")}
      />

      <Text style={styles.txtdonuts}>blablabla</Text>

      <Image
        style={styles.donuts1}
        source={require("../donuts/src/Imagem/donutsmorango.png")}
      />

      <Image
        style={styles.donuts2}
        source={require("../donuts/src/Imagem/donutsmorango.png")}
      />

      <Image
        style={styles.donuts3}
        source={require("../donuts/src/Imagem/donutsmorango.png")}
      />

      <Image
        style={styles.donuts4}
        source={require("../donuts/src/Imagem/donutsmorango.png")}
      />

      <Image
        style={styles.donuts5}
        source={require("../donuts/src/Imagem/donutsmorango.png")}
      />

      <View style={{ backgroundColor: "white", top: "10%", right: 100 }}>
        <AntDesign name="hearto" size={40} color="black" />

        <Text style={styles.valor}> R$ 15,00</Text>

        <View style={{ backgroundColor: "white", bottom: "50%", left: 200 }}>
          <AntDesign name="shoppingcart" size={50} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },

  logo: {
    width: "10%",
    height: "10%",
    left: "40%",
    top: "5%",
  },

  txt: {
    fontSize: 40,
    fontFamily: "Rokkitt",
    zIndex: 5,
    width: "55%",
    textAlign: "center",
  },

  donutsmorango: {
    width: 500,
    height: 500,
    top: "15%",
    right: "5%",
  },

  donuts1: {
    width: 700,
    height: 700,
    position: "absolute",
    top: -130,
    right: 130,
  },

  donuts2: {
    width: 150,
    height: 150,
    position: "absolute",
    top: "45%",
    right: 350,
  },

  donuts3: {
    width: 150,
    height: 150,
    position: "absolute",
    top: "85%",
    right: 350,
  },

  donuts4: {
    width: 150,
    height: 150,
    position: "absolute",
    top: "55%",
    left: 350,
  },

  donuts5: {
    width: 150,
    height: 150,
    position: "absolute",
    top: "95%",
    left: 310,
  },

  txtdonuts: {
    fontSize: 30,
    bottom: "10%",
    fontFamily: "Rokkitt",
  },

  valor: {
    fontSize: 25,
    fontFamily: "Rokkitt",
    position: "absolute",
    top: "10%",
    left: 80,
  },

  row: {
    width: "50%",
    height: 2,
    backgroundColor: "lightpink",
    zIndex: 5,
  },
});
