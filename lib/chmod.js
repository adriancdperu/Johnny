<script language="JavaScript">
<!--
// 4-digit Chmod calculator


function calculator(user, number){
// Superuser
if (user == "superuser" && number == "4"){var box = eval("document.chmod.superuser4")}
if (user == "superuser" && number == "2"){var box = eval("document.chmod.superuser2")}
if (user == "superuser" && number == "1"){var box = eval("document.chmod.superuser1")}
// Owner
if (user == "owner" && number == "4"){var box = eval("document.chmod.owner4")}
if (user == "owner" && number == "2"){var box = eval("document.chmod.owner2")}
if (user == "owner" && number == "1"){var box = eval("document.chmod.owner1")}
// Group
if (user == "group" && number == "4"){var box = eval("document.chmod.group4")}
if (user == "group" && number == "2"){var box = eval("document.chmod.group2")}
if (user == "group" && number == "1"){var box = eval("document.chmod.group1")}
// Other
if (user == "other" && number == "4"){var box = eval("document.chmod.other4")}
if (user == "other" && number == "2"){var box = eval("document.chmod.other2")}
if (user == "other" && number == "1"){var box = eval("document.chmod.other1")}
if (box.checked == true){
if (user == "superuser"){
document.chmod.h_superuser.value += ("+number")
var a= (document.chmod.h_superuser.value)
var b= eval(a)
document.chmod.h_superuser.value=b
document.chmod.t_superuser.value=b
}if (user == "owner"){
document.chmod.h_owner.value += ("+number")
var a= (document.chmod.h_owner.value)
var b= eval(a)
document.chmod.h_owner.value=b
document.chmod.t_owner.value=b
}if (user == "group"){
document.chmod.h_group.value += ("+number")
var a= (document.chmod.h_group.value)
var b= eval(a)
document.chmod.h_group.value=b
document.chmod.t_group.value=b
}if (user == "other"){
document.chmod.h_other.value += ("+number")
var a= (document.chmod.h_other.value)
var b= eval(a)
document.chmod.h_other.value=b
document.chmod.t_other.value=b
}
}
if (box.checked == false){
if (user == "superuser"){
if (document.chmod.h_superuser.value == ""){
document.chmod.t_superuser.value=""
}else {
var a=(document.chmod.h_superuser.value);
b=a-(number);
c=eval(b);
document.chmod.h_superuser.value=c
document.chmod.t_superuser.value=c
}}if (user == "owner"){
if (document.chmod.h_owner.value == ""){
document.chmod.t_owner.value=""
}else {
var a=(document.chmod.h_owner.value);
b=a-(number);
c=eval(b);
document.chmod.h_owner.value=c
document.chmod.t_owner.value=c
}}if (user == "group"){
if (document.chmod.h_group.value == ""){
document.chmod.t_group.value=""
}else {
var a=(document.chmod.h_group.value);
b=a-(number);
c=eval(b);
document.chmod.h_group.value=c
document.chmod.t_group.value=c
}}if (user == "other"){
if (document.chmod.h_other.value == ""){
document.chmod.t_other.value=""
}else {
var a=(document.chmod.h_other.value);
b=a-(number);
c=eval(b);
document.chmod.h_other.value=c
document.chmod.t_other.value=c
}}
}}
// -->
</script>
<form name="chmod">
<input name="h_superuser" type="hidden"><input name="h_owner" type="hidden"><input name="h_group" type="hidden"><input name="h_other" type="hidden">
<table bgcolor="black" cellpadding="5" cellspacing="1">
<tr bgcolor="white">
<td colspan="6">
<center>
<font face="Verdana" size="3"><b>4-digit Chmod</b></font></center>
</td>
</tr>
<tr bgcolor="white" align="center">
<td colspan="2"><font face="Verdana" size="2"><b>Superuser</b></font></td>
<td><font face="Verdana" size="2"><b>Permission</b></font></td>
<td><font face="Verdana" size="2"><b>Owner</b></font></td>
<td><font face="Verdana" size="2"><b>Group</b></font></td>
<td><font face="Verdana" size="2"><b>Other</b></font></td>
</tr>
<tr bgcolor="white" align="center">
<td><font face="Verdana" size="2"><b>setuid</b></font></td>
<td><input type="checkbox" name="superuser4" value="4" onclick="calculator('superuser', 4)"></td>
<td><font face="Verdana" size="2"><b>Read</b></font></td>
<td><input type="checkbox" name="owner4" value="4" onclick="calculator('owner', 4)"></td>
<td><input type="checkbox" name="group4" value="4" onclick="calculator('group', 4)"></td>
<td><input type="checkbox" name="other4" value="4" onclick="calculator('other', 4)"></td>
</tr>
<tr bgcolor="white" align="center">
<td><font face="Verdana" size="2"><b>setgid</b></font></td>
<td><input type="checkbox" name="superuser2" value="2" onclick="calculator('superuser', 2)"></td>
<td><font face="Verdana" size="2"><b>Write</b></font></td>
<td><input type="checkbox" name="owner2" value="2" onclick="calculator('owner', 2)"></td>
<td><input type="checkbox" name="group2" value="2" onclick="calculator('group', 2)"></td>
<td><input type="checkbox" name="other2" value="2" onclick="calculator('other', 2)"></td>
</tr>
<tr bgcolor="white" align="center">
<td><font face="Verdana" size="2"><b>stickybit</b></font></td>
<td><input type="checkbox" name="superuser1" value="1" onclick="calculator('superuser', 1)"></td>
<td><font face="Verdana" size="2"><b>Execute</b></font></td>
<td><input type="checkbox" name="owner1" value="1" onclick="calculator('owner', 1)"></td>
<td><input type="checkbox" name="group1" value="1" onclick="calculator('group', 1)"></td>
<td><input type="checkbox" name="other1" value="1" onclick="calculator('other', 1)"></td>
</tr>
<tr bgcolor="white" align="center">
<td><font face="Verdana" size="2"><b>Value</b></font></td>
<td><input type="text" name="t_superuser" size="1"></td>
<td><b>+</b></td>
<td><input type="text" name="t_owner" size="1"></td>
<td><input type="text" name="t_group" size="1"></td>
<td><input type="text" name="t_other" size="1"></td>
</tr>
</table>
</form>
<p><font face="arial" size="1">This free script provided by</font><br>
<a href="http://javascriptkit.com"><font face="arial,helvetica" size="1">JavaScript Kit</font></a></p>
