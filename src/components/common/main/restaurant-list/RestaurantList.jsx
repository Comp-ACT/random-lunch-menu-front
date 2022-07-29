import Restaurant from './Restaurant';

function RestaurantList() {
  const tempList = ['텍스트길이가 길어지면 어떻게 처리하는지 확인', '멍', '짹', '삐약', '야옹', '멍', '짹', '삐약', '야옹', '멍', '짹', '삐약', '야옹', '멍', '짹', '삐약'];
  const tempHtml = tempList.map((temp) => (
    <Restaurant name={temp} />
  ));
  return (
    <div style={{
      height: '60%',
    }}
    >
      <div>
        <input type="text" />
      </div>
      <div style={{ overflow: 'scroll', height: '100%' }}>
        {tempHtml}
      </div>
    </div>
  );
}

export default RestaurantList;
