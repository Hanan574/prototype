const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

//express app
const app = express();

//Connect to MongoDB
const dburi =
  "mongodb+srv://Hanan:Allah574@nodetuts.ehnag3b.mongodb.net/nodetuts";
mongoose
  .connect(dburi, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

//register view engine

app.set("view engine", "ejs");
app.set("views", "view");

// middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// mongoose & mongo tests
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  })

  blog.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('5ea99b49b8531f40c0fde689')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

//routes

app.get("/afar", (req, res) => {
  res.render("afar", { title: "Afar" });
});
app.get("/amhara", (req, res) => {
  res.render("amhara", { title: "Amhara" });
});
app.get("/gambella", (req, res) => {
  res.render("gambella", { title: "Gambella" });
});
app.get("/gurage", (req, res) => {
  res.render("gurage", { title: "Gurage" });
});
app.get("/oromo", (req, res) => {
  res.render("oromo", { title: "Oromo" });
});
app.get("/sidama", (req, res) => {
  res.render("sidama", { title: "sidama" });
});
app.get("/snnpr", (req, res) => {
  res.render("snnpr", { title: "snnpr" });
});
app.get("/somalia", (req, res) => {
  res.render("somalia", { title: "somalia" });
});
app.get("/wolayta", (req, res) => {
  res.render("wolayta", { title: "wolayta" });
});
app.get("/tigray", (req, res) => {
  res.render("tigray", { title: "tigray" });
});
app.get("/contribute", (req, res) => {
  res.render("contribute", { title: "contribute" });
});
app.get("/explore", (req, res) => {
  res.render("explore", { title: "explore" });
});
app.get("/login", (req, res) => {
  res.render("login", { title: "login" });
});


app.post("/blogs", (req, res)=> {
  const blog = new Blog(req.body);

  blog.save()
  .then((result)=>{
    res.redirect("/blogs");
  })
  .catch((err)=>{
    console.log(err);
  })
})


app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then(result => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch(err => {
      console.log(err);
    });
});





app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;

  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send('Invalid blog id');
  }

  Blog.findById(id)
    .then(result => {
      if (!result) {
        return res.status(404).send('Blog not found');
      }
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Internal Server Error');
    });
});
app.delete('/blogs/:id', (req, res) => {
  const id = req.params.id;
  
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});