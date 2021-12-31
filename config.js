/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.extraPlugins = 'wordcount,notification,lineheight,preview,letterspacing,html5video,uploadfile,stylescombo,stylesheetparser';
	config.height = 500;
	config.width = 'auto';
	config.removeButtons = 'Save';
	//add 6.5.2020 theo ci dao d/c quyen
	config.fontSize_defaultLabel = '18px';
	config.font_defaultLabel = 'Time New Roman';
	//config.stylesSet = ['Special Container'];
	config.stylesSet =  [
		{ name: 'tieu-de', element: 'div',  styles: { 'background':'#eeeeee', 'border':'1px solid #cccccc', 'padding':'5px 10px', 'color':'#3498db', 'font-size':'16px !important','font':'Time New Roman', 'font-style':'normal !important', 'text-align':'center' } },
		{ name: 'bai-viet', element: 'p', styles: { 'color':'#000000', 'font-size':'18px','font':'Time New Roman', 'text-align':'justify', 'margin':'0' } },
		{ name: 'bang-hinh', element: 'table', styles: { 'width':'500px'} },
		{ name: 'hinh', element: 'img', attributes: { 'class':'img'}, styles: { 'width':'500px'} },

	];
};

CKEDITOR.on( 'dialogDefinition', function( ev ) {
	var dialogName = ev.data.name;
	var dialogDefinition = ev.data.definition;

	if ( dialogName == 'table' ) {
		var info = dialogDefinition.getContents( 'info' );
		info.get( 'txtWidth' )[ 'default' ] = '500px';       // Set default width to 100%
		info.get( 'txtBorder' )[ 'default' ] = '0';         // Set default border to 0
		info.get( 'txtRows' )[ 'default' ] = '2';
		info.get( 'txtCols' )[ 'default' ] = '1';
		info.get( 'cmbAlign' )['default'] = 'center';
	}
});

CKEDITOR.on( 'dialogDefinition', function( ev ) {
	var dialogName = ev.data.name;
	var dialogDefinition = ev.data.definition;

	if ( dialogName == 'image' ) {
		var info = dialogDefinition.getContents( 'info' );
		info.get( 'txtWidth' )[ 'default' ] = '500px';       // Set default width to 100%
		info.get( 'txtBorder' )[ 'default' ] = '0';         // Set default border to 0
		info.get( 'cmbAlign' )['default'] = 'center';
	}
});

CKEDITOR.on( 'dialogDefinition', function( ev ) {
	var dialogName = ev.data.name;
	var dialogDefinition = ev.data.definition;

	if ( dialogName == 'iframe' ) {
		var info = dialogDefinition.getContents( 'info' );
		info.get( 'width' )[ 'default' ] = '670px';       // Set default width to 100%
		info.get( 'height' )[ 'default' ] = '800px';         // Set default border to 0
		info.get( 'align' )[ 'default' ] = 'middle'; 
		info.get( 'scrolling' )[ 'default' ] = 'checked'; 
	}
});

CKEDITOR.on( 'dialogDefinition', function( ev ) {
	var dialogName = ev.data.name;
	var dialogDefinition = ev.data.definition;

	if ( dialogName == 'link' ) {
		var info = dialogDefinition.getContents( 'info' );
		info.get( 'url' )[ 'default' ] = 'http://congan.gialai.gov.vn/';       // Set default width to 100%
	}
});

