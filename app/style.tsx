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
  button: "rgb(86, 12, 206)"
};
const commonStyles = StyleSheet.create({
  FullWidthScreen: {
    flex: 1,
    width: '100%',

  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagelogo: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
  header: {
    fontSize: 21,
    color: colors.secondary,
    fontWeight: 'bold',
    paddingVertical: 12,
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
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
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
    borderRadius: 8,
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
  textparagraphLeft:{
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'left',
    marginBottom: 12,
  },
  textparagraph:{
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12,
  },
  button2:{
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
     
  },
  buttonText2:{
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    textAlign: "center",
    color: colors.button
  }
});

export { colors, commonStyles };