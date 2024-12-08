// -----------------------------
//       YarnWood Adventure
// -----------------------------
// !!! Updated to fit C# instead of Python !!!

using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        StartAdventure();
    }

    // Function to present choices and return player's selection
    static string MakeChoice()
    {
        Console.WriteLine("What will you do?");
        Console.WriteLine("1. Set up camp");
        Console.WriteLine("2. Grab a snack");
        Console.WriteLine("3. Explore the woods");

        Console.Write("Enter the number of your choice: ");
        string? playerChoice = Console.ReadLine(); // Allow nullable input
        return playerChoice ?? ""; // Return empty string if null
    }

    // Function for the adventure story
    static void StartAdventure()
    {
        Console.WriteLine("YarnWood is a magical forest where you, a cat, embark on a cozy camping adventure. Beneath woven-bark trees and starlit skies, you set up camp under the massive PurrPine. The air hums with the sounds of owls and streams, promising a night of warmth, adventure, and feline companionship.");
        
        bool gameIsOver = false; // Boolean variable to control the game loop
        List<string> choicesMade = new List<string>(); // List to store each choice made by the player

        while (!gameIsOver)
        {
            string playerChoice = MakeChoice();
            
            if (!string.IsNullOrWhiteSpace(playerChoice)) // Ensure the choice is valid
            {
                choicesMade.Add(playerChoice); // Store the player's choice in the list
            }
            else
            {
                Console.WriteLine("Invalid input. Please try again.");
                continue;
            }

            switch (playerChoice)
            {
                case "1": // Set up camp
                    Console.WriteLine("As the rain starts to pick up you decide to set up camp. Drops pitter patter on the roof of your tent and you drift to sleep.");
                    gameIsOver = true; // End game
                    break;

                case "2": // Grab a snack
                    Console.WriteLine("You reach into your bag to grab a granola bar. You start feeling small drops of water on your head.");
                    // Additional choice after grabbing a snack
                    Console.Write("Do you (1) Set up camp or (2) Dance in the rain? ");
                    string? snackChoice = Console.ReadLine(); // Allow nullable input
                    snackChoice = snackChoice ?? ""; // Handle null
                    if (!string.IsNullOrWhiteSpace(snackChoice))
                    {
                        choicesMade.Add(snackChoice); // Store this additional choice in the list
                        if (snackChoice == "1")
                        {
                            Console.WriteLine("As the rain starts to pick up you decide to set up camp. Drops pitter patter on the roof of your tent and you drift to sleep.");
                            gameIsOver = true;
                        }
                        else
                        {
                            Console.WriteLine("Although you had so much fun dancing around, your fur is soaked. You set up camp to dry off inside. Drops pitter patter on the roof of your tent and you drift to sleep.");
                            gameIsOver = true;
                        }
                    }
                    else
                    {
                        Console.WriteLine("Invalid input for snack choice. Please try again.");
                    }
                    break;

                case "3": // Explore the woods
                    Console.WriteLine("You walk into a peaceful clearing and find a lake. You find a comfortable stump and rest.");
                    gameIsOver = true;
                    break;

                default:
                    Console.WriteLine("Invalid choice. Try again.");
                    break;
            }
        }

        Console.WriteLine("\nThe adventure ends here.");
        Console.WriteLine("You made the following choices: " + string.Join(", ", choicesMade));
    }
}