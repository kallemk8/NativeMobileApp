import { StyleSheet } from 'react-native';

const colors = {
  primary: '#32a852',
  secondary: '#560CCE',
  background: '#F5F5F5',
  text: '#333',
  disablebutton: "#ccc",
  white: '#FFF',
  black: '#000',
  forgot: "#ff0000",
  button: "#000080"
};
const commonStyles = StyleSheet.create({
  FullWidthScreen: {
    flex: 1,
    width: '100%',

  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',

    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagelogo: {
    width: 153,
    height: 60,
    marginBottom: 8,
  },
  imagelogo4: {
    width: 100,
    height: 40
  },
  imagelogo2: {
    width: 100,
    height: 100,
    marginBottom: 8,
    borderRadius: 100
  },
  imagelogo3: {
    width: 50,
    height: 50,
    marginBottom: 8,
    borderRadius: 100,
    margin: 10
  },
  header: {
    fontSize: 32,
    color: "#1A1A1A",
    fontWeight: 'bold',
    paddingVertical: 12,
    textAlign: "center",
    marginBottom: 15
  },
  header2: {
    color: "#4F4F4F",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 15
  },
  text: {
    fontSize: 16,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
    textAlign: "center"
  },
  input: {
    borderWidth: 1,
    borderColor: '#79747E',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 25,
    height: 56,
    backgroundColor: colors.white,
    width: "100%",
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  forgot: {
    fontSize: 13,
    color: colors.forgot,
    fontWeight: "bold"
  },
  Commonbutton: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: colors.button,
    textAlign: "center",
    borderRadius: 100,
    height: 54,
    lineHeight: 54
  },
  CheckINButton: {
    width: 132,
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: "rgba(62, 148, 0, 1)",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    borderRadius: 100,
    height: 44,

  },

  Commonbutton2: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: colors.disablebutton,
    textAlign: "center",
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: colors.forgot,
  },
  item: {
    backgroundColor: 'rgb(233 230 230)',
    padding: 20,
    marginVertical: 8,
    boxShadow: "0px 3px 4px 0px #ccc"
  },
  title: {
    fontSize: 24,
  },
  textparagraphLeft: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'left',
    marginBottom: 12,
  },
  textparagraph: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
  button2: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 10,

  },
  buttonText2: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    textAlign: "center",
    color: colors.button
  },
  labelStyle: {
    backgroundColor: "#fff",
    color: "#000",
    textAlign: "left",
    position: "absolute",
    top: -15,
    left: 10,
    zIndex: 999,
    fontSize: 16,
    padding: 5
  },
  positionRelative: {
    position: "relative",
    width: "100%"
  },
  flexcontainer: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10, // Optional: Adds spacing on sides
    paddingTop: 10
  },
  left: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  left2: {
    flexDirection: "row",  // Places icon & text side by side
    alignItems: "center",
    flex: 1,  // Allow it to take space
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 20

  },
  right2:{
    flex:1,
    justifyContent: 'center',
        alignItems: 'center',
  },
  left3:{
    flex:1,
    justifyContent: 'center',
        alignItems: 'center',
  },
  checkInHolder: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,

    padding: 12,
  },
  checkintext: {
    fontSize: 12,
    color: "#4F4F4F"

  },
  checkintextSub: {
    fontSize: 16,
    color: "#000"

  },
  borderwithOne: {

    borderColor: '#808080',

    borderRightWidth: 2,
  },
  marginTop50: {
    marginTop: 15,
    marginBottom: 15
  },
  iconContainer: {
    marginRight: 10, // Adds space between icon and text
    paddingRight: 20,
    paddingLeft: 10
  },
  textContainer: {
    justifyContent: "center",
  },
  welcometext:{
    fontSize:18,
    fontWeight:"bold",
    color:"#333",
    textAlign:"center",
    marginTop:15,
    marginBottom:15
  },
  modules:{
    borderWidth: 1,
    borderColor: '#fff',
    padding:10,
    width:"95%",
    marginRight:15,
   // backgroundColor:"#fff",
    marginBottom:15,
    boxShadow:"0px 5px 2px 0px #ccc"
  }
});

export { colors, commonStyles };