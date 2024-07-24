import os

# 替换规则字典
replace_dict = {
    '，': ',',
    # '。': '.',
    '！': '!',
    '？': '?',
    '：': ':',
    '；': ';',
    '（': '(',
    '）': ')',
    # '【': '[',
    # '】': ']',
    # '「': '{',
    # '」': '}',
    # '《': '<',
    # '》': '>',
    '、': ',',
    '“': '"',
    '”': '"',
    '‘': "'",
    '’': "'"
}

def replace_chinese_punctuation(text):
    for zh_punct, en_punct in replace_dict.items():
        text = text.replace(zh_punct, en_punct)
    return text

def process_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 替换中文符号为英文符号
        new_content = replace_chinese_punctuation(content)

        # 将替换后的内容写回文件
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"Processed file: {file_path}")
    except Exception as e:
        print(f"An error occurred while processing {file_path}: {e}")

def process_folder(folder_path):
    for root, dirs, files in os.walk(folder_path):
        for file in files:
            file_path = os.path.join(root, file)
            process_file(file_path)

if __name__ == "__main__":
    # 指定要处理的文件夹路径
    folder_path = '/Users/chouchou/development/owner/chou401.github.io/src/content/blog'

    process_folder(folder_path)
