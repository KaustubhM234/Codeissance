import re

def extract_disability_info(text):
    # Regular expression patterns to capture relevant information
    patterns = {
        "certificate_number": r"Certificate No\.: (\w+)",
        "name": r"examined (.*?), Son of",
        "date_of_birth": r"Date of Birth (\d{2}/\d{2}/\d{4})",
        "age": r"Age (\d+)",
        "gender": r"(\bMale\b|\bFemale\b)",
        "diagnosis": r"diagnosis in his case is (.*?)\s+He has (\d+)%",
        "address": r"resident of House No (.*?),  ",
        "registration_number": r"Registration No\. (\d{4}/\d{5}/\d{4}/\d{7})",
        "disability_type": r"case of (.*?) Disability"
    }

    extracted_data = {}
    for key, pattern in patterns.items():
        match = re.search(pattern, text)
        if match:
            extracted_data[key] = match.group(1).strip()

    return extracted_data

# Sample report text
report_text = """
[Your provided text here]
"""

# Extract information from the report text
extracted_info = extract_disability_info(report_text)

# Print the extracted information
print(extracted_info)