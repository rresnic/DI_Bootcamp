# # # please explain what to guess how many means? Does it mean find out or actually guess?

import random

# Generate a list of random numbers
list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number = 3728

def count_all_pairs_with_sum(numbers, target):
    # Dictionary to count occurrences of each number
    count = {}
    for num in numbers:
        count[num] = count.get(num, 0) + 1

    num_pairs = 0

    # Count pairs
    for num in count:
        complement = target - num

        if complement in count:
            if num == complement:
                # Count pairs of the same number
                num_pairs += count[num] * (count[num] - 1) // 2
            else:
                # Count pairs with different numbers
                num_pairs += count[num] * count[complement]

    # Since each pair is counted twice, we need to divide by 2
    return num_pairs // 2

print(f"Actual number of pairs: {count_all_pairs_with_sum(list_of_numbers, target_number)}")

def get_valid_pairs(integer_max, target):
    lower_limit = max(1, target - integer_max)
    upper_limit = min(integer_max, target - 1)
    if lower_limit <= upper_limit:
        return upper_limit - lower_limit + 1
    return 0

def get_expected(guesses, integer_max, target):
    valid_pairs = get_valid_pairs(integer_max, target)
    total_pairs = guesses * (guesses - 1) // 2
    return (valid_pairs * total_pairs) / (integer_max * integer_max)

print(f"Expected number of pairs: {get_expected(20000, 10000, target_number)}")
