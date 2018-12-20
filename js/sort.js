'use strict';

function handleTableClick(event) {
  if (event.target.classList.contains('prop__name')) {
		switch (event.target.dataset.dir) {
			case '1':
				event.target.dataset.dir = '-1';
				break;
			case '-1':
				event.target.dataset.dir = '1';
				break;
			default:
				event.target.dataset.dir = '1';	
		}
		event.currentTarget.dataset.sortBy = event.target.dataset.propName;
    let field = event.target.dataset.propName;
    let direction = event.target.dataset.dir;
		sortTable(field, direction); 
	}	
}
