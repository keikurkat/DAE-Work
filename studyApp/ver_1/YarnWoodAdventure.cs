using UnityEngine;
using System.Collections.Generic;

public class YarnWoodAdventure : MonoBehaviour
{
    private bool gameIsOver; // Initialize game state
    private List<string> choicesMade; // Store player choices
    private Vector3 playerPosition; // Use Vector3 for player position
    private Rigidbody playerRigidbody; // Reference to Rigidbody component for physics
    private string playerChoice;

    // Awake() is called before the game starts
    void Awake()
    {
        // Initialize objects or components
        choicesMade = new List<string>();
        playerPosition = Vector3.zero; // Start at origin
        playerRigidbody = GetComponent<Rigidbody>();
        Debug.Log("Game initialized in Awake.");
    }

    // Start() is called before the first frame update
    void Start()
    {
        // Initialize variables or perform startup actions
        gameIsOver = false;
        Debug.Log("Welcome to YarnWood! Your adventure begins.");
    }

    // Update() is called once per frame
    void Update()
    {
        // Handle per-frame logic like player input
        if (gameIsOver) return;

        if (Input.GetKeyDown(KeyCode.Alpha1)) // Set up camp
        {
            MakeChoice("1");
        }
        else if (Input.GetKeyDown(KeyCode.Alpha2)) // Grab a snack
        {
            MakeChoice("2");
        }
        else if (Input.GetKeyDown(KeyCode.Alpha3)) // Explore the woods
        {
            MakeChoice("3");
        }
    }

    // FixedUpdate() for physics calculations
    void FixedUpdate()
    {
        // Example of moving the player in the forward direction using Rigidbody
        if (playerRigidbody != null)
        {
            playerRigidbody.MovePosition(playerPosition + Vector3.forward * Time.fixedDeltaTime);
        }
    }

    // Function to process player choices
    void MakeChoice(string choice)
    {
        choicesMade.Add(choice); // Store choice
        playerChoice = choice;

        switch (choice)
        {
            case "1": // Set up camp
                Debug.Log("You set up camp as the rain starts to fall. The pitter-patter on the roof of your tent lulls you to sleep.");
                gameIsOver = true;
                break;

            case "2": // Grab a snack
                Debug.Log("You grab a granola bar and feel rain starting to fall.");
                Debug.Log("Press '1' to set up camp or '2' to dance in the rain.");
                if (Input.GetKeyDown(KeyCode.Alpha1))
                {
                    Debug.Log("You set up camp to avoid the rain.");
                    gameIsOver = true;
                }
                else if (Input.GetKeyDown(KeyCode.Alpha2))
                {
                    Debug.Log("You dance in the rain, soaking wet but happy. Then you set up camp to dry off.");
                    gameIsOver = true;
                }
                break;

            case "3": // Explore the woods
                Debug.Log("You find a peaceful clearing by a lake and rest on a stump.");
                gameIsOver = true;
                break;

            default:
                Debug.Log("Invalid choice. Try again.");
                break;
        }

        Debug.Log($"Choices so far: {string.Join(", ", choicesMade)}");
    }
}
