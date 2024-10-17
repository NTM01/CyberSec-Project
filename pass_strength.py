import re
import tkinter as tk
from tkinter import messagebox

def assess_password_strength(password):
    # Initialize strength score
    strength_score = 0
    feedback = []

    # Check length
    if len(password) >= 8:
        strength_score += 1
    else:
        feedback.append("Password should be at least 8 characters long.")

    # Check for uppercase letters
    if re.search(r'[A-Z]', password):
        strength_score += 1
    else:
        feedback.append("Password should contain at least one uppercase letter.")

    # Check for lowercase letters
    if re.search(r'[a-z]', password):
        strength_score += 1
    else:
        feedback.append("Password should contain at least one lowercase letter.")

    # Check for digits
    if re.search(r'[0-9]', password):
        strength_score += 1
    else:
        feedback.append("Password should contain at least one number.")

    # Check for special characters
    if re.search(r'[\W_]', password):
        strength_score += 1
    else:
        feedback.append("Password should contain at least one special character.")

    # Assess overall strength
    if strength_score == 5:
        feedback.append("Your password is very strong!")
    elif strength_score == 4:
        feedback.append("Your password is strong.")
    elif strength_score == 3:
        feedback.append("Your password is moderate.")
    else:
        feedback.append("Your password is weak.")

    return feedback

def check_password():
    password = entry.get()  # Get password from entry field
    feedback = assess_password_strength(password)
    result_text = "\n".join(feedback)
    messagebox.showinfo("Password Strength Result", result_text)  # Display result

# Set up GUI window
root = tk.Tk()
root.title("Password Strength Checker")

# Create and place widgets
label = tk.Label(root, text="Enter your password:")
label.pack(pady=10)

entry = tk.Entry(root, show="*", width=30)  # Input field for password
entry.pack(pady=10)

button = tk.Button(root, text="Check Strength", command=check_password)  # Button to check password
button.pack(pady=10)

# Start the GUI event loop
root.mainloop()
