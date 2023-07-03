const successMsgs = [
  "Success! Task completed.",
  "Great job! Everything worked perfectly.",
  "Operation successful.",
  "Mission accomplished.",
  "You did it! Success achieved.",
  "Success is yours!",
  "Hooray! Success has been achieved.",
  "Well done! Success attained.",
  "Success unlocked.",
  "Congratulations! Success obtained.",
];

const failureMsgs = [
  "Error! Something went wrong.",
  "Oops! An error occurred.",
  "Failure. Please try again.",
  "Task unsuccessful.",
  "Uh-oh! Operation failed.",
  "Failed to complete the operation.",
  "Error encountered. Failure.",
  "Operation terminated with an error.",
  "Failure is a stepping stone to success.",
  "Failure at this stage. Keep going!",
];

const warningMsgs = [
  "Warning! Proceed with caution.",
  "Caution advised. Warning!",
  "This action may have consequences. Warning.",
  "Attention! Warning ahead.",
  "Watch out! Warning.",
  "Be cautious. Warning issued.",
  "Warning: potential risk detected.",
  "Exercise caution. Warning.",
  "Heads up! Warning.",
  "Warning bells are ringing.",
];

const randomMsg = (msgs) => msgs[Math.floor(Math.random() * msgs.length)];

export { successMsgs, warningMsgs, failureMsgs, randomMsg };
