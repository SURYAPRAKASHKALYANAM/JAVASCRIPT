

// The event loop
// JavaScript has a runtime model based on an event loop, which is responsible for executing the code,
//  collecting and processing events, and executing queued sub-tasks.
//  This model is quite different from models in other languages like C and Java.
// In this example we will use setTimeout to schedule some work that should be executed after one second:
setTimeout(function() {
    console.log('Hello');
}
, 1000);
console.log('World');
// The code above schedules a task to be executed as soon as possible after one second.
//  However, there is no guarantee that the code will run exactly after one second,
//  since the event loop will process the callback at its earliest opportunity.
//  In this case, the callback will be executed after one second.
//  The output of the above code will be:
// World
// Hello
// The event loop model
// The event loop is a single thread that performs all I/O operations asynchronously.
//  The event loop continuously checks if there is any task in the queue.
//  If there is any task, it will be executed immediately.
//  Otherwise, the event loop will keep checking the queue for new tasks.

// The event loop model
// The event loop model consists of the following components:

// The Call Stack
// The call stack is a data structure that stores the execution context of the currently executing task.
//  The call stack is a LIFO (Last In First Out) data structure.
//  The call stack is used to store the execution context of the currently executing task.
//  When a task is executed, its execution context is pushed onto the call stack.
//  When the task is completed, its execution context is popped off the call stack.
//  The call stack is a synchronous data structure.

// The Heap
// The heap is a memory location where objects are stored.
//  The heap is an unstructured memory pool.
//  The heap is a shared resource that is accessible to all threads.
//  The heap is an asynchronous data structure.

// The Queue
// The queue is a data structure that stores a list of tasks.
//  The queue is a FIFO (First In First Out) data structure.
//  The queue is used to store a list of tasks that are ready to be executed.
//  The queue is an asynchronous data structure.

// The event loop
// The event loop is a single thread that continuously checks the queue for new tasks.
//  If there is any task, it will be executed immediately.
//  Otherwise, the event loop will keep checking the queue for new tasks.
//  The event loop is an asynchronous data structure.
