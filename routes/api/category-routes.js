const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// get all categories, products
router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    // find options
    include: {
      model: Product,
      // create the list of attributes to select
      // basically a left join?
      attributes: ["id", "product_name", "price", "stock", "category_id"],
    },
  })
    // return all products as JSON objects
    .then((categoryData) => res.json(categoryData))
    .catch((err) => {
      console.error(err);
      // return 500 'server error'
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  Category.findOne({
    where: {
      id: req.params.id,
    },
    // include associated products through the category_id attribute
    include: {
      model: Product,
      attributes: ["category_id"],
    },
  })
    .then((categoryData) => res.json(categoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new category
  // INVESTIGATE: use findOrCreate?
  // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findorcreate
  Category.create({
    category_name: req.body.category_name,
  })
    .then((categoryData) => res.json(categoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((categoryData) => {
      if (!categoryData) {
        res.status(404).json({ message: "category not found with this id" });
        return;
      }
      res.json(categoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// BONUS! put for category name update
router.put("/", (req, res) => {
  // update a category by its `category_name` value
  Category.update(req.body, {
    where: {
      category_name: req.params.id,
    },
  })
    .then((categoryData) => {
      if (!categoryData) {
        res.status(404).json({ message: "category not found with this name" });
        return;
      }
      res.json(categoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((categoryData) => {
      if (!categoryData) {
        res.status(404).json({ message: "category not found with this id" });
        return;
      }
      res.json(categoryData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
