﻿//  REC-open_lib.js
//
// Opening script
//   

/*  Sample for testing routine by itself 
    var scriptName = 'PIXEL SHIFT UTILITY SCRIPTS (PSUS)';
    var scriptVersion = 'Version: 0.6  -  18Feb2017';
    var scriptAuthor = 'Ron Chambers  -  2017';
    var scriptAbstract = 'PSUS';

// Includes an external .js file
// @include 'REC-open_lib.js' 
*/

		var dlg = new Window('dialog', scriptName);
		dlg.alignment = "center";
		dlg.openPnl = dlg.add('panel', undefined, scriptAuthor);
		var bga = dlg.openPnl.add ("group");
		bga.orientation = "column";
		bga.alignment = "center";
		txt1 = bga.add('statictext', undefined, scriptVersion);
		txt2 = bga.add('statictext', undefined, scriptAbstract);
		var bg = dlg.openPnl.add ("group");
		bg.orientation = "row";
		bg.alignment = "center";
		bg1 = bg.add ("button", undefined, "OK");
		bg1.onClick = dobuild; 
		bg2 = bg.add ("button", undefined, "Cancel");
		bg2.onClick = doabort;
		bg3 = bg.add ("button", undefined, "Help");
		bg3.onClick = dohelp;
		dlg.show();

		function dobuild() {
			 // alert("Congratulations - it all worked!");
				dlg.close();
		}

		function doabort() {
			 // alert("De-Congratulations - it all didn't worked!");
				dlg.close();
				return;
		}

		function dohelp() {
				alert("Congratulations - need help");
				openURL("PS-help.html");
				dlg.close();
		}

		function openURL(url) {
			var fname = "shortcut.url";
			var shortcut = new File(Folder.temp + '/' + fname);
			shortcut.open('w');
			shortcut.writeln('[InternetShortcut]');
			shortcut.writeln('URL=' + url);
			shortcut.writeln();
			shortcut.close();
			shortcut.execute();
			shortcut.remove();
		};