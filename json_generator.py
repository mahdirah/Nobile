import os
import json

def generate_product_data(main_folder_path, output_json="products.json"):
    product_data = []
    product_id = 1

    # Traverse through each folder in the main folder
    for folder_name in os.listdir(main_folder_path):
        folder_path = os.path.join(main_folder_path, folder_name)

        # Ensure it’s a directory
        if os.path.isdir(folder_path):
            photos = sorted([f for f in os.listdir(folder_path) if f.endswith(('.jpg', '.jpeg', '.png'))],key=lambda x: (x != 'main.jpg', int(re.search(r'\d+', x).group()) if re.search(r'\d+', x) else float('inf')))
            if not photos:
                continue  # Skip if there are no images in the folder

            # Set main image path and format paths for all photos
            main_image = f"assets/images/{folder_name}/{photos[0]}"
            other_photos = [f"assets/images/{folder_name}/{photo}" for photo in photos]

            # Create the product entry with the folder name as product name
            product_entry = {
                "id": product_id,
                "name": folder_name,  # Folder name as product name
                "price": "",
                "image": main_image,
                "description": "",
                "color": "",
                "other_photos": other_photos  # All photos including main photo
            }

            product_data.append(product_entry)
            product_id += 1

    # Write data to JSON file
    with open(output_json, 'w') as json_file:
        json.dump(product_data, json_file, indent=4)

    print(f"Product data saved to {output_json}")

# Usage
main_folder_path = "assets/images"
generate_product_data(main_folder_path)
