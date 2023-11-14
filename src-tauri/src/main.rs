// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

struct MyObject {
    name: String,
    age: u32,
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet, getDailyTasks])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn greet(name: &str) -> String {
    println!("Hello, {}!", name);
    return format!("Hello, {}!", name);
}

#[tauri::command]
fn getDailyTasks(date: &str) {
    // Create an array of objects
    let my_objects = vec![
        MyObject {
            name: String::from("Alice"),
            age: 25,
        },
        MyObject {
            name: String::from("Bob"),
            age: 30,
        },
        MyObject {
            name: String::from("Charlie"),
            age: 35,
        },
    ];

    // Access and print the objects
    for obj in &my_objects {
        println!("Name: {}, Age: {}", obj.name, obj.age);
    }
}
