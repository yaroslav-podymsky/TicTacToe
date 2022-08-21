import { StyleSheet, View, } from 'react-native';
import Cell from './Cell';

export default function Cells({gridArr,clickEl,result}) {
  return (
      <View style={styles.gridBlock}>
      {  console.log('Cells')}
        {gridArr.map((el,index)=> {
          const x = result.filter(el => el  === index)
          return (
          <Cell 
            result={x}
            // showCircleOrCross={showCircleOrCross}
            key={index}
            value={el} 
            index={index} 
            clickEL={clickEl}
            />
          )
        })}
      </View>
  );
}
const styles = StyleSheet.create({
  gridBlock: {
    width: 320,
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'center',
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
