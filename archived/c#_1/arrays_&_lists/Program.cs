// -----------------------------
//        Arrays & Lists
// -----------------------------



// Arrays have FIXED size
// Lists can grow in size



// Array

// int[] numbers = {5,19,15,20};
//
// Console.WriteLine(numbers[0]);



// List

List<string> friends = new List<string>();
friends.Add("Alice");
friends.Add("Bob");
friends.Add("Charlie");

for (int i=0; i<friends.Count;i++){
    Console.WriteLine(friends[i]);
}
