import 'dart:convert';
import 'package:random_user/models/random_user_model.dart';
import 'package:http/http.dart' as http;

Future<RandomUser> getRandomUser() async {
  const url = "https://randomuser.me/api/";

  final response = await http.get(Uri.parse(url));

  if (response.statusCode == 200) {
    return RandomUser.fromJson(jsonDecode(response.body));
  } else {
    throw Exception("Deu ruim");
  }
}
