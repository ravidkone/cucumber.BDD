package cucumber.Runner;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Logger;

public class RunLog4jLogs {

	
	static Logger logger=Logger.getLogger(RunLog4jLogs.class);

	public static void main(String[] args) {
		// This line must be added to print the logs in console
		    BasicConfigurator.configure();

		    logger.debug("This is debug message");
	        logger.info("This is info message");
	        logger.warn("This is warn message");
	        logger.fatal("This is fatal message");
	        logger.error("This is error message");
	        System.out.println("Logic executed successfully....");
	    }

	}

