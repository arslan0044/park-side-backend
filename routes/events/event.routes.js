import express from "express";
import {
    createEvent,
    getAllEvents,
    getEventById,
    updateEvent,
    deleteEvent,
    updateEventStatus,
    getUpcomingEvents
} from "../../controllers/events/event.controller.js";

const router = express.Router();

// Event routes
router.post("/", createEvent);
router.get("/", getAllEvents);
router.get("/upcoming", getUpcomingEvents);
router.get("/:id", getEventById);
router.put("/:id", updateEvent);
router.put("/status/:id", updateEventStatus);
router.delete("/:id", deleteEvent);

export default router; 