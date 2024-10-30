# Function to present choices and return player's selection
def make_choice():
    print("\nWhat will you do?")
    print("1. Set up camp")
    print("2. Grab a snack")
    print("3. Explore the woods")

    choice = input("Enter the number of your choice: ")
    return choice

# Function for the adventure story
def start_adventure():
    print("YarnWood is a magical forest where you, a cat, embark on a cozy camping adventure. Beneath woven-bark trees and starlit skies, you set up camp under the massive PurrPine. The air hums with the sounds of owls and streams, promising a night of warmth, adventure, and feline companionship.")
    game_over = False  # Variable to control the game loop

    while not game_over:
        choice = make_choice()

        if choice == "1":  # Set up camp
            print("As the rain starts to pick up you decide to set up camp. Drops pitter patter on the roof of your tent and you drift to sleep.")
            game_over = True  # End game

        elif choice == "2":  # Grab a snack
            print("You reach into your bag to grab a gronola bar. You start feeling small drops of water on your head.")
            # Additional choice after the cave
            bear_choice = input("Do you (1) Set up camp or (2) Dance in the rain? ")
            if bear_choice == "1":
                print("As the rain starts to pick up you decide to set up camp. Drops pitter patter on the roof of your tent and you drift to sleep.")
                game_over = True
            else:
                print("Although you had so much fun dancing around your fur is soaked. You set up camp to dry off inside. Drops pitter patter on the roof of your tent and you drift to sleep.")
                game_over = True

        elif choice == "3":  # Explore the woods
            print("You walk into a peaceful clearing and find a lake. You find a comfortable stump and rest.")
            game_over = True

        else:
            print("Invalid choice. Try again.")

    print("\nThe adventure ends here.")
    
# Start the game
start_adventure()