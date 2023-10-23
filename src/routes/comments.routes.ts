const {createOneComment,readAllComment, readOneComment, updateOneComment, deleteOneComment} = require('../controllers/comments.controllers')

router.post('/create', createOneComment);
router.get('/', readAllComment);
router.patch('/update/:id', updateOneComment)
router.delete('/delete/:id', deleteOneComment);
router.get('/:id', readOneComment)

module.exports = router;