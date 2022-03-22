package main

import (
	"database/sql"
	"encoding/json"
	f "fmt"
	"log"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"net/http"
	"reflect"
	"os"
	"github.com/joho/godotenv"

	_ "github.com/go-sql-driver/mysql"
)

type Products struct {
	ID        int     `json:"ID"`
	Name      string  `json:"Name"`
	Image     string  `json:"Image"`
	Bedrooms  int     `json:"Bedrooms"`
	Bathrooms int     `json:"Bathrooms"`
	Price     float32 `json:"Price"`
	Des_Box   string  `json:"Des"`
	ALT   	string  `json:"Alt"`
}
type Featured struct {
	ID        int     `json:"ID"`
	Name      string  `json:"Name"`
	Image     string  `json:"Image"`
	Price     string `json:"Price"`
	ALT   	string  `json:"Alt"`

}
func goDotEnvVariable(key string) string {

	// load .env file
	err := godotenv.Load(".env")
  
	if err != nil {
	  log.Fatalf("Error loading .env file")
	}
  
	return os.Getenv(key)
  }
func dbConn() (db *sql.DB) {
	
	dbDriver := goDotEnvVariable("DB_DRIVER")
	dbUser := goDotEnvVariable("DB_USER")
	dbPass := goDotEnvVariable("DB_PASS")
	dbNAme := goDotEnvVariable("DB_NAME")
	dbTCP := goDotEnvVariable("DB_TCP")
	db, err := sql.Open(dbDriver, dbUser+":"+dbPass+dbTCP+dbNAme)
	if err != nil {
		panic(err.Error())
	}
	return db
}

func Index(w http.ResponseWriter, r *http.Request) {
	db := dbConn()
	selDB, err := db.Query("Select product_id, productName, image, bathrooms, bedrooms, price, des_box, alt FROM Products")

	if err != nil {
		panic(err.Error())
	}
	product := Products{}

	res := []Products{}

	defer db.Close()
	defer selDB.Close()
	for selDB.Next() {
		var id, bedrooms, bathrooms int
		var name, image, des_box, alt string
		var price float32
		err = selDB.Scan(&id, &name, &image, &bathrooms, &bedrooms, &price, &des_box,&alt)

		if err != nil {
			panic(err.Error())
		}
		product.Name = name
		product.ID = id
		product.Bathrooms = bathrooms
		product.Bedrooms = bedrooms
		product.Price = price
		product.Image = image
		product.Des_Box = des_box
		product.ALT = alt


		res = append(res, product)

	}

	jsonData, err := json.Marshal(res)
	rawIn := json.RawMessage(jsonData)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	// myString := string(rawIn[:])

	if err != nil {
		panic(err.Error())
	}
	if err = selDB.Err(); err != nil {
		panic(err) // Error related to the iteration of rows
	}

	newString := json.NewEncoder(w).Encode(&rawIn)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	f.Println(newString)
	

	defer db.Close()
}
func Feature(w http.ResponseWriter, r *http.Request) {
	db := dbConn()
	selDB, err := db.Query("Select featuredName, image, alt, price FROM Featured")

	if err != nil {
		panic(err.Error())
	}
	product := Featured{}

	res := []Featured{}

	defer db.Close()
	defer selDB.Close()
	for selDB.Next() {
		var name, image, alt, price string
		
		err = selDB.Scan(&name, &image, &alt, &price)

		if err != nil {
			panic(err.Error())
		}
		product.Name = name
		product.Price = price
		product.Image = image
		product.ALT = alt
		


		res = append(res, product)

	}

	jsonData, err := json.Marshal(res)
	rawIn := json.RawMessage(jsonData)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	// myString := string(rawIn[:])

	if err != nil {
		panic(err.Error())
	}
	if err = selDB.Err(); err != nil {
		panic(err) // Error related to the iteration of rows
	}

	newString := json.NewEncoder(w).Encode(&rawIn)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	f.Println(newString)
	

	defer db.Close()
}

func NewFilter(w http.ResponseWriter, r *http.Request) {
	db := dbConn()
	selDB, err := db.Query("Select product_id, productName, image, bathrooms, bedrooms, price, des_box, alt FROM Products ORDER BY price DESC")

	if err != nil {
		panic(err.Error())
	}
	product := Products{}

	res := []Products{}

	defer db.Close()
	defer selDB.Close()
	for selDB.Next() {
		var id, bedrooms, bathrooms int
		var name, image, des_box, alt string
		var price float32
		err = selDB.Scan(&id, &name, &image, &bathrooms, &bedrooms, &price, &des_box, &alt)

		if err != nil {
			panic(err.Error())
		}
		product.Name = name
		product.ID = id
		product.Bathrooms = bathrooms
		product.Bedrooms = bedrooms
		product.Price = price
		product.Image = image
		product.Des_Box = des_box
		product.ALT = alt

		res = append(res, product)

	}

	jsonData, err := json.Marshal(res)
	rawIn := json.RawMessage(jsonData)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	myString := string(rawIn[:])

	if err != nil {
		panic(err.Error())
	}
	if err = selDB.Err(); err != nil {
		panic(err) // Error related to the iteration of rows
	}

	newString := json.NewEncoder(w).Encode(&rawIn)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	f.Println(newString)
	f.Println(myString)
	f.Println(reflect.TypeOf(myString))

	defer db.Close()
}
func LowFilter(w http.ResponseWriter, r *http.Request) {
	db := dbConn()
	selDB, err := db.Query("Select product_id, productName, image, bathrooms, bedrooms, price, des_box, alt FROM Products ORDER BY price ASC")

	if err != nil {
		panic(err.Error())
	}
	product := Products{}

	res := []Products{}

	defer db.Close()
	defer selDB.Close()
	for selDB.Next() {
		var id, bedrooms, bathrooms int
		var name, image, des_box, alt string
		var price float32
		err = selDB.Scan(&id, &name, &image, &bathrooms, &bedrooms, &price, &des_box, &alt)

		if err != nil {
			panic(err.Error())
		}
		product.Name = name
		product.ID = id
		product.Bathrooms = bathrooms
		product.Bedrooms = bedrooms
		product.Price = price
		product.Image = image
		product.Des_Box = des_box


		res = append(res, product)

	}

	jsonData, err := json.Marshal(res)
	rawIn := json.RawMessage(jsonData)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	myString := string(rawIn[:])

	if err != nil {
		panic(err.Error())
	}
	if err = selDB.Err(); err != nil {
		panic(err) // Error related to the iteration of rows
	}

	newString := json.NewEncoder(w).Encode(&rawIn)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	f.Println(newString)
	f.Println(myString)
	f.Println(reflect.TypeOf(myString))

	defer db.Close()
}
func login(w http.ResponseWriter, r *http.Request) {
	db := dbConn()
    if r.Method == "POST" {
        name := r.FormValue("firstName")
        lastName := r.FormValue("lastName")
		email := r.FormValue("Email")
        insForm, err := db.Prepare("INSERT INTO Contacts(firstName, lastName, email) VALUES(?,?,?)")
        if err != nil {
            panic(err.Error())
        }
        insForm.Exec(name,lastName, email)
        log.Println("INSERT: Name: " + name + " | Last name: " + lastName + "Email: " + email)
    }
    defer db.Close()
    http.Redirect(w, r, "http://localhost:3000", 301)

}

func main() {

	router := mux.NewRouter()
	//api route is /people,
	//Methods("GET", "OPTIONS") means it support GET, OPTIONS
	router.HandleFunc("/", Index).Methods("GET", "OPTIONS")
	router.HandleFunc("/filter", NewFilter).Methods("GET", "OPTIONS")
	router.HandleFunc("/low", LowFilter).Methods("GET", "OPTIONS")
	router.HandleFunc("/featured", Feature).Methods("GET", "OPTIONS")
	router.HandleFunc("/form",login).Methods("POST", "OPTIONS")
	http.ListenAndServe(":8080", handlers.CORS()(router))
}
