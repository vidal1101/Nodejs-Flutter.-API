import 'package:flutter/material.dart';
import 'dart:async';
import 'package:http/http.dart' as http;
import 'dart:convert';

class HomePage extends StatefulWidget {
  HomePage({Key key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  String _url = "reqres.in";
  List userdata;

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    getUsers();
    //getDio();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Users api '),
      ),
      body: ListView.builder(
        itemCount: this.userdata == null ? 0 : this.userdata.length,
        itemBuilder: (BuildContext context, int index) {
          return Card(
            child: Row(
              children: <Widget>[
                CircleAvatar(
                  backgroundImage: NetworkImage(userdata[index]["avatar"]),
                ),
                Padding(
                  padding: EdgeInsets.all(22.0),
                  child: Column(
                    children: <Widget>[
                      Text('${userdata[index]["first_name"]}',
                          style: TextStyle(
                              fontSize: 20.0, fontWeight: FontWeight.bold)),
                      Text('${userdata[index]["email"]}',
                          style: TextStyle(
                              fontSize: 15.0, fontWeight: FontWeight.w400)),
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
 
  Future<dynamic> getUsers() async {

    final url = Uri.http(_url, 'api/users/');
    final resp = await http.get(url);
    Map decodedData = json.decode(resp.body);
    print(decodedData);
    
    setState(() {
      this.userdata = decodedData['data'];
    });
  }


}
