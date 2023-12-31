import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  cardicon: {
    alignSelf: 'center',
    marginRight: 5
  },
  cardsWrapper: {
    marginBottom: 20,
    width: '100%',
    alignSelf: 'center',
    borderBottomColor: "#fff",
    // backgroundColor:"black"

  },
  card: {
    maxHeight: 160,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.06,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  context:{
    fontSize:14,
    fontFamily:"Roboto-Medium"
  },
  cardcategory: {
    maxHeight: 160,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.06,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingTop: 10,
    padding: 10
  },
  card_Trans_Cat: {
    maxHeight: 180,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.06,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingTop: 10,
    padding: 10
  },
  cardImgWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardImg: {
    height: '50%',
    width: '80%',
    borderRadius: 10,
    padding: 30,
  },
  cardInfo: {
    flex: 4,
    paddingRight: 5,
  },
  categorycardInfo: {
    flex: 4,
    padding: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: "Roboto-Bold",
    paddingBottom: 5,
  },
  cardDetails: {
    fontSize: 15,
    paddingEnd: 10,
    paddingBottom: 2,
    color: '#444',
  },
  daterow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },
  cardButton1: {
    backgroundColor: "#e9b4f0",
    width: 80,
    height: 25,
    margin: 2,
    padding: 2,
    borderRadius: 10
  },

  labelStyle: {
    fontSize: 14,
    paddingTop: 0,
    color: "#fff",
    fontFamily: 'Roboto-Regular',
    textAlign: "center",
    alignSelf: 'center'
  },
  tutorsearchbox: {
    width: "83%",
    paddingHorizontal: 20,
    marginRight: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row"
  },
  tutorsearchboxicon: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingRight: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: "row"
  },

  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
   // flexDirection: 'column',
    marginBottom: 10
  },
  profileImageContainer: {
    marginTop: 10,
    alignItems: 'center',
    
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // To make the image round
  },
  nameContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstName: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    marginRight: 10,
  },
  detailsContainer: {
    alignItems: "center",
    justifyContent: 'center',
  },
  detailItem: {
    display: "flex",
    flexDirection: 'column',
    marginBottom: 10,
  },
  detailItemclaim: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "flex-start",
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: 'Roboto-Bold',
  },   label: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
    marginBottom: 8,
},

  detailValue: {
    width: 340,
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    borderWidth: 1,
    borderColor: "#aaa2ab",
    borderRadius: 7,
    padding: 10,
  },
  detailValueclaim: {
    display: "flex",
    flexDirection: "row",
  },
  cardButton: {
    backgroundColor: "#1b00b3",
    width: 80,
    height: 30,
    margin: 2,
    padding: 5,
    borderRadius: 10,
    // alignContent: 'center'
  },

  serachboximage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  searchbox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingRight: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8
  },
  serachemail: {
    fontSize: 14,
    marginLeft: 10,
    color: "grey"
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  userCardsWrapper: {
    marginTop: 5,
    width: '99%',
    borderColor: "black",
    alignSelf: 'center',
    borderBottomColor: "#fff",
  }
});

export { styles }
