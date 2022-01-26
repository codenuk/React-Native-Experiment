import { StyleSheet } from 'react-native'
import { colors, fonts, mediaScreen } from '../../theme'

const styles = StyleSheet.create({
  bannerBox: {
    paddingVertical: mediaScreen(10, 10, 15, 15),
    height: mediaScreen(150, 150, 300, 500),
  },
  searchBox: {
    borderRadius: 15,
    padding: mediaScreen(10, 10, 15, 15),
    alignItems: 'center',
  },
  searchBox__text: {
    fontSize: mediaScreen(fonts.size.font18, fonts.size.font18, fonts.size.font12, fonts.size.font12),
  },
  searchBox__box: {},
  searchBox__boxInput: {
    flexDirection: 'row',
    paddingVertical: mediaScreen(5, 5, 10, 10),
  },
  searchBox__digit: {
    width: mediaScreen(45, 45, 80, 80),
    height: mediaScreen(55, 55, 90, 90),
    backgroundColor: colors.white,
    textAlign: 'center',
    marginRight: mediaScreen(10, 10, 20, 20),
    borderRadius: 10,
    fontSize: mediaScreen(fonts.size.font22, fonts.size.font22, fonts.size.font20, fonts.size.font20),
    fontWeight: fonts.weight.full,
  },
  searchBox__grpButton: {
    flexDirection: 'row',
    paddingVertical: mediaScreen(5, 5, 10, 10),
  },

  searchBox__clearButton: {
    backgroundColor: colors.white,
    flex: 2,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
  },
  searchBox__clearText: {
    color: colors.purple,
    fontSize: mediaScreen(fonts.size.font18, fonts.size.font18, fonts.size.font10, fonts.size.font10),
    textAlign: 'center',
  },

  searchBox__searchButton: {
    backgroundColor: colors.purple,
    flex: 3,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 10,
  },
  searchBox__searchText: {
    color: colors.white,
    fontSize: mediaScreen(fonts.size.font18, fonts.size.font18, fonts.size.font10, fonts.size.font10),
    textAlign: 'center',
  },
  searchBox__grpFilter: {
    flexDirection: 'row',
    paddingVertical: mediaScreen(5, 5, 10, 10),
  },
  searchBox__grpFilter__button: {
    backgroundColor: colors.white,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginRight: 10,
  },
  searchBox__grpFilter__button_ative: {
    backgroundColor: colors.purple,
  },
  searchBox__grpFilter__text: {
    color: colors.black,
    fontSize: mediaScreen(fonts.size.font14, fonts.size.font14, fonts.size.font8, fonts.size.font8),
    textAlign: 'center',
  },
  searchBox__grpFilter__text_ative: {
    color: colors.white,
  },

  filterSize: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  filterSize__boxSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterSize__switch: {
    transform: [{ scaleX: mediaScreen(1, 1, 1.5, 1.5) }, { scaleY: mediaScreen(1, 1, 1.5, 1.5) }],
    marginHorizontal: mediaScreen(0, 0, 10, 10),
  },
  filterSize__switch_text: {
    fontSize: mediaScreen(fonts.size.font14, fonts.size.font14, fonts.size.font12, fonts.size.font12),
    marginRight: mediaScreen(5, 5, 10, 10),
    fontWeight: fonts.weight.bold,
  },

  lotteryList: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  imageLottery: {
    width: '48%',
    height: mediaScreen(88, 88, 200, 200),
    marginBottom: '2%',
    marginRight: '2%',
  },
})

export default styles
