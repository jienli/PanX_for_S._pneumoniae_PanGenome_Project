var new_columns_config=[
	{insertion_pos:'Name',
	 new_col: {
        'data':'PAO1',
        'render':
            function(data, type, row, meta){
                return ' <a href="http://pseudomonas.com/primarySequenceFeature/list?strain_ids=107&term=Pseudomonas+aeruginosa+PAO1+%28Reference%29&c1=name&v1='+data+'+&e1=1&assembly=complete" target="_blank">'+data+'</a>';
            },
        'name':'PAO1',
        'tooltip':'PAO1 gene annotations from Pseudomonas Genome Database'
        }
    }
];