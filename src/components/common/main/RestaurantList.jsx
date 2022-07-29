function RestaurantList() {
  const tempList = ['야옹', '멍', '짹', '삐약', '야옹', '멍', '짹', '삐약', '야옹', '멍', '짹', '삐약', '야옹', '멍', '짹', '삐약'];
  const tempHtml = tempList.map((temp) => <li style={{ marginTop: 30 }}>{temp}</li>);
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
