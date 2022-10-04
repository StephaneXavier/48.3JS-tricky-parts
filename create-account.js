function createAccount(pin, amount = 0) {
    let PIN = pin;
    let balance = amount;

    const validPin = function (pwd) {
        if (pwd === PIN) return true
    }


    function checkBalance(pwd) {
        if (validPin(pwd)) {
            return `$${balance}`
        }
        return 'Invalid PIN.'
    }
    function deposit(password, depositAmount) {
        if (validPin(password)) {
            balance += depositAmount
            return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`
        }
        return 'Invalid PIN.'
    }

    function withdraw(password, withdrawAmount) {
        if (validPin(password)) {
            let newBalance = balance - withdrawAmount
            if (newBalance < 0) return "Withdrawal amount exceeds account balance. Transaction cancelled."
            balance -= withdrawAmount
            return `Succesfully withdrew $${withdrawAmount}. Current balance: $${balance}.`
        }
        return 'Invalid PIN.'
    }

    function changePin(currentPin, newPin) {
        if (validPin(currentPin)) {
            PIN = newPin
            return "PIN successfully changed!"
        }
        return 'Invalid PIN.'
    }

    return {
        checkBalance: checkBalance,
        deposit: deposit,
        withdraw: withdraw,
        changePin: changePin
    }

}

module.exports = { createAccount };
