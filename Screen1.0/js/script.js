// script.js

window.addEventListener('DOMContentLoaded', (event) => {
  // 在页面加载完成后，自动对表格的第一列进行排序
  handleDataAndSort();
});

function handleDataAndSort() {
  axios.get('http://192.168.137.142:8888/student/getZoneNum'
  ).then(res => {
  	//console.log("res:", res);
  
  	if (res.data.code == 200) {
  		let dataForOption = res.data.data;
		//console.log('dataForOption:', dataForOption);
  		var sourceData = [];
  		for (let i = 0; i < dataForOption.length; i++) {
  			sourceData.push({
  				name: dataForOption[i].zone,
  				value: dataForOption[i].num
  
  			});
  		}
  		console.log('sourceData:', sourceData)
  		const filteredData = sourceData.filter(item => item.name !==null&&item.name.trim() !== "");
  		
  		console.log('filteredData:', filteredData)
  		 fillTableWithData(filteredData);
  		      sortTable(1); // 根据第二列排序
}
}).catch(function(error) {
      console.error('Error fetching data:', error);
    });
}

function fillTableWithData(data) {
  var table = document.getElementById('myTable');
  var rows = table.getElementsByTagName('tr');

  // 遍历数据并填充至表格
  for (var i = 0; i < data.length; i++) {
    var row = rows[i + 1]; // 跳过表格的标题行
    if (row) {
      var cells = row.getElementsByTagName('td');
      cells[0].innerHTML = data[i].name; // 填充第一列
      cells[1].innerHTML = data[i].value; // 填充第二列
    } else {
      // 如果数据超过现有行数，添加新的行并填充数据
      var newRow = table.insertRow(-1);
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      cell1.innerHTML = data[i].name;
      cell2.innerHTML = data[i].value;
    }
  }
 // sortTable(1);
}

function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("tr");

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = parseFloat(rows[i].getElementsByTagName("td")[columnIndex].innerHTML);
            y = parseFloat(rows[i + 1].getElementsByTagName("td")[columnIndex].innerHTML);

            // 使用数值比较进行排序
            if (x < y) {
                shouldSwitch = true;
                break;
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }

    for (i = 1; i < rows.length; i++) {
        if (i <= 7) {
            rows[i].style.display = "table-row";
        } else {
            rows[i].style.display = "none";
        }
    }
}