#!/usr/bin/env python3
"""
Simple and elegant display of "I love you Aliza" with clean borders
"""

import os

def clear_screen():
    """Clear the terminal screen"""
    os.system('cls' if os.name == 'nt' else 'clear')

def main():
    clear_screen()
    
    message = "I love you Aliza"
    border_length = len(message) + 6
    
    # Print clean border design
    print("┌" + "─" * border_length + "┐")
    print("│  " + message + "  │")
    print("└" + "─" * border_length + "┘")
    
    print("\n💕 Forever and always 💕")

if __name__ == "__main__":
    main()
