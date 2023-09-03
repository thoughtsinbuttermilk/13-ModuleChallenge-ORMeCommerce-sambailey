const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
// get all categories, products
router.get("/", (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Product.findAll({
    attributes: ["id", product_name, "price, stock"],
    include: [
      {
        model: Category,
        attributes: ["category_name"],
      },
      {
        model: Tag,
        attributes: ["tag_name"],
      },
    ],
  })
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
  Product.findOne({
    where: {
      id: req.params.id
},
attributes: ["id", "product_name", "price", "stock"],
include: [
  {
model: Category,
attributes: ["category_name']
  },
  {
    model: Tag,
    attributes: ['tag_name']
  }
]
  })

router.post("/", (req, res) => {
  // create a new category
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
